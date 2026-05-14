import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Add a route to fetch Google Drive images and folders
  app.get("/api/gallery", async (req, res) => {
    const apiKey = process.env.GOOGLE_DRIVE_API_KEY;
    const rootFolderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
    // Allow query param "folderId" or default to root
    const targetFolderId = req.query.folderId || rootFolderId;

    if (!apiKey || !rootFolderId || rootFolderId === '.') {
      return res.status(500).json({ error: "Google Drive configuration is missing.", code: "CONFIG_MISSING" });
    }

    try {
      // Query files that belong to the specific folder and are images OR folders
      const queryStr = `'${targetFolderId}' in parents and (mimeType contains 'image/' or mimeType = 'application/vnd.google-apps.folder') and trashed = false`;
      const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(queryStr)}&key=${apiKey}&fields=files(id,name,mimeType,thumbnailLink,webContentLink)&orderBy=folder,name&includeItemsFromAllDrives=true&supportsAllDrives=true`;
      
      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        return res.status(500).json({ error: data.error.message });
      }

      // Map files to output items 
      const items = data.files.map((file: any) => {
        let imageUrl = null;
        if (file.mimeType !== 'application/vnd.google-apps.folder') {
           // Provide an optimal image source from Drive options
           if (file.thumbnailLink) {
              // Increase the thumbnail resolution dynamically
              imageUrl = file.thumbnailLink.replace('=s220', '=s1000');
           } else if (file.webContentLink) {
              imageUrl = file.webContentLink;
           } else {
              imageUrl = `https://drive.google.com/uc?id=${file.id}`;
           }
        }

        return {
          id: file.id,
          name: file.name,
          isFolder: file.mimeType === 'application/vnd.google-apps.folder',
          url: imageUrl
        };
      });

      res.json({ items });
    } catch (error) {
      console.error("Error fetching from Google Drive:", error);
      res.status(500).json({ error: "Failed to fetch images from Google Drive." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
