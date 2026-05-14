import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ZoomIn, Loader2, Folder, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const fallbackGalleryImages = [
  "https://www.superiorsafaris.co.za/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-03-at-10.18.23_5d33be47-150x150.jpg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2023/12/ECJ-PHOTOGRAPHY-461-150x150.jpg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2023/12/ECJ-PHOTOGRAPHY-456-150x150.jpg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-03-at-10.18.23_2abaf8a3-150x150.jpg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2023/12/ECJ-PHOTOGRAPHY-454-150x150.jpg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2023/12/ECJ-PHOTOGRAPHY-444-150x150.jpg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2024/03/4-1024x683.jpg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2024/03/5-1024x683.jpg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2023/11/image-16.jpeg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2023/12/safarisfishing.jpg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2023/12/hunttailoredbanner.jpg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2023/12/superiorspecial-5_thumb.jpg"
];

export default function Gallery() {
  const [items, setItems] = useState<{ id?: string; url: string; name?: string; isFolder?: boolean }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  const [folderHistory, setFolderHistory] = useState<string[]>([]);

  useEffect(() => {
    const fetchDriveImages = async (folderId?: string) => {
      setIsLoading(true);
      try {
        const url = folderId ? `/api/gallery?folderId=${folderId}` : '/api/gallery';
        const response = await fetch(url);
        const data = await response.json();
        
        if (!response.ok) {
          if (data.code === 'CONFIG_MISSING') {
            setErrorStatus('CONFIG_MISSING');
          } else {
            console.error("Failed to fetch gallery images:", data.error);
            // If the folder is entirely invalid, we might want to also show the missing config state
            if (data.error && typeof data.error === 'string' && data.error.includes("File not found")) {
               setErrorStatus('CONFIG_MISSING');
            }
          }
          // Fallback data if keys aren't added
          setItems(fallbackGalleryImages.map((u, i) => ({ id: String(i), url: u })));
        } else {
          setErrorStatus(null);
          if (data.items && data.items.length > 0) {
            setItems(data.items);
          } else {
            setErrorStatus('EMPTY_FOLDER');
            setItems([]);
          }
        }
      } catch (error) {
        console.error("Failed to fetch gallery items:", error);
        setItems(fallbackGalleryImages.map((u, i) => ({ id: String(i), url: u })));
      } finally {
        setIsLoading(false);
      }
    };

    const currentFolder = folderHistory.length > 0 ? folderHistory[folderHistory.length - 1] : undefined;
    fetchDriveImages(currentFolder);
  }, [folderHistory]);

  const handleFolderClick = (folderId: string) => {
    setFolderHistory(prev => [...prev, folderId]);
  };

  const handleBackClick = () => {
    setFolderHistory(prev => prev.slice(0, -1));
  };

  return (
    <section id="gallery" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-primary text-3xl md:text-4xl font-bold uppercase mb-6">Our Gallery</h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A glimpse into the African bush. Browse through our collection of memories, successful hunts, and the stunning landscapes of Superior African Hunting Safaris.
          </p>
        </div>

        {errorStatus === 'CONFIG_MISSING' && (
          <div className="bg-yellow-50 text-yellow-800 p-4 border border-yellow-200 rounded-md mb-8 text-center max-w-2xl mx-auto">
            <h4 className="font-bold">Google Drive Connection Missing or Invalid</h4>
            <p className="text-sm mt-1">
              Please configure <code className="bg-yellow-100 px-1 py-0.5 rounded">GOOGLE_DRIVE_API_KEY</code> and <code className="bg-yellow-100 px-1 py-0.5 rounded">GOOGLE_DRIVE_FOLDER_ID</code> in your environment.
              <br />
              <strong>Note:</strong> The folder and its contents <strong>must</strong> be shared as "Anyone with the link can view".
            </p>
          </div>
        )}

        {errorStatus === 'EMPTY_FOLDER' && (
          <div className="bg-blue-50 text-blue-800 p-8 border border-blue-200 rounded-md mb-8 text-center max-w-2xl mx-auto">
            <h4 className="font-bold text-lg mb-2">No Images Found</h4>
            <p className="text-sm">
              We couldn't find any images in this folder.
            </p>
            <ul className="text-sm mt-4 list-disc text-left pl-8 space-y-1 inline-block">
              <li>Make sure there are image files (like .jpg, .png) in the folder.</li>
              <li>Make sure the folder is shared as <strong>"Anyone with the link can view"</strong> in Google Drive.</li>
              <li>Wait a moment if you recently changed permissions or added files.</li>
            </ul>
          </div>
        )}

        {folderHistory.length > 0 && (
          <div className="mb-6 flex justify-start max-w-7xl mx-auto">
            <button 
              onClick={handleBackClick}
              className="flex items-center gap-2 text-dark hover:text-primary font-bold uppercase text-sm transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </div>
        )}

        {/* Display Folders as Buttons */}
        {!isLoading && items.filter(item => item.isFolder).length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {items.filter(item => item.isFolder).map((folder, index) => (
              <motion.button
                key={folder.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => handleFolderClick(folder.id!)}
                className="flex items-center gap-2 bg-dark hover:bg-primary text-white border-2 border-transparent hover:border-primary px-6 py-3 font-bold uppercase tracking-widest text-sm transition-all shadow-md group"
              >
                <Folder className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                {folder.name}
              </motion.button>
            ))}
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.filter(item => !item.isFolder).map((item, index) => (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="aspect-square overflow-hidden bg-dark relative group cursor-pointer"
              >
                <img 
                  src={item.url} 
                  alt={item.name || `Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12 flex justify-center gap-4">
          <Link 
            to="/#contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 font-bold uppercase tracking-widest text-sm transition-colors shadow-md"
          >
            Start Your Adventure
          </Link>
          <Link 
            to="/"
            className="inline-block border-2 border-dark text-dark hover:bg-dark hover:text-white px-8 py-3 font-bold uppercase tracking-widest text-sm transition-colors shadow-md"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
