import React, { useRef, useEffect, useState } from 'react';
import { fabric } from 'fabric';
// import GIF from 'gif.js';

const GreenScreenRemover: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [processedGifUrl, setProcessedGifUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Process GIF frame by frame
  const processGif = async (file: File) => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. Parse GIF frames using gif.js
    const gif = new GIF({
      workers: 2,
      quality: 10,
      width: canvas.width,
      height: canvas.height,
      transparent: 0x00FF00, // Green screen color (adjust if needed)
    });

    // 2. Load GIF and process each frame
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return;

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      tempCanvas.width = img.width;
      tempCanvas.height = img.height;

      // Initialize fabric.js canvas
      const fabricCanvas = new fabric.Canvas(canvas, {
        preserveObjectStacking: true,
      });

      // Mock frame processing (in a real app, use a GIF parser)
      tempCtx.drawImage(img, 0, 0);
      const imageData = tempCtx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // 3. Remove green pixels (chroma key)
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        // Check if pixel is green (adjust threshold as needed)
        if (g > r + b && g > 150) {
          data[i + 3] = 0; // Set alpha to 0 (transparent)
        }
      }

      tempCtx.putImageData(imageData, 0, 0);
      
      // Add processed frame to GIF
      gif.addFrame(tempCanvas, { delay: 100, copy: true });

      // Finalize and create new GIF
      gif.on('finished', (blob: Blob) => {
        setProcessedGifUrl(URL.createObjectURL(blob));
      });

      gif.render();
    };
  };

  return (
    <div className="container">
      <h2>Green Screen Remover</h2>
      <input
        type="file"
        ref={fileInputRef}
        accept=".gif"
        onChange={(e) => e.target.files?.[0] && processGif(e.target.files[0])}
      />
      
      <div className="previews">
        <div>
          <h3>Original GIF:</h3>
          {fileInputRef.current?.files?.[0] && (
            <img 
              src={URL.createObjectURL(fileInputRef.current.files[0])} 
              alt="Original GIF" 
            />
          )}
        </div>
        
        <div>
          <h3>Processed (Transparent BG):</h3>
          {processedGifUrl && <img src={processedGifUrl} alt="Processed GIF" />}
        </div>
      </div>

      {/* Hidden processing canvas */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      <style jsx>{`
        .container {
          font-family: sans-serif;
          padding: 20px;
        }
        .previews {
          display: flex;
          gap: 20px;
          margin-top: 20px;
        }
        img {
          max-width: 300px;
          border: 1px dashed #ccc;
        }
      `}</style>
    </div>
  );
};

export default GreenScreenRemover;
