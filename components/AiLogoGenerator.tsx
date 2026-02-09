import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Loader2, Image as ImageIcon, Download } from 'lucide-react';

export const AiLogoGenerator: React.FC = () => {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateLogo = async () => {
    setIsLoading(true);
    setError(null);
    
    // Safety check for API Key
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      setError("API Key no configurada. Por favor configura process.env.API_KEY.");
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              text: "A professional, minimalist, and premium logo for a dental clinic named 'Clínica Dental'. The design should feature a stylized tooth or abstract dental element combined with clean, modern typography. Use a color palette of Deep Ocean Teal (#0F4C5C), Warm Terracotta (#E29578), and white. The style should be suitable for a high-end medical website, conveying trust, precision, and care. Vector-style graphic, flat design, white background.",
            },
          ],
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1",
          }
        },
      });

      let foundImage = false;
      if (response.candidates && response.candidates[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64EncodeString = part.inlineData.data;
            const imageUrl = `data:image/png;base64,${base64EncodeString}`;
            setGeneratedImage(imageUrl);
            foundImage = true;
            break;
          }
        }
      }

      if (!foundImage) {
        throw new Error("No se pudo generar la imagen. Intenta de nuevo.");
      }

    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Error al generar el logo");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-terracotta-500/10 border border-terracotta-500/20 text-terracotta-500 text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4" />
          <span>AI Design Studio</span>
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4">Generador de Logos con IA</h2>
        <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
          Utiliza nuestra inteligencia artificial integrada para explorar nuevos conceptos de marca. 
          Genera logos únicos y profesionales en segundos.
        </p>

        <div className="glass-card-dark p-8 rounded-3xl max-w-lg mx-auto">
          <div className="aspect-square bg-slate-800/50 rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-slate-700 relative">
            {isLoading ? (
              <div className="text-center">
                <Loader2 className="w-12 h-12 text-terracotta-500 animate-spin mx-auto mb-4" />
                <p className="text-slate-400 text-sm animate-pulse">Diseñando tu logo...</p>
              </div>
            ) : generatedImage ? (
              <img src={generatedImage} alt="Logo Generado" className="w-full h-full object-contain" />
            ) : (
              <div className="text-center text-slate-500">
                <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Tu logo aparecerá aquí</p>
              </div>
            )}
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-200 text-sm p-4 rounded-xl mb-6">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-3">
            <button
              onClick={generateLogo}
              disabled={isLoading}
              className="w-full bg-terracotta-500 hover:bg-terracotta-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-terracotta-500/20 flex items-center justify-center gap-2"
            >
              {isLoading ? 'Generando...' : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generar Nuevo Concepto
                </>
              )}
            </button>
            
            {generatedImage && (
              <a
                href={generatedImage}
                download="logo-clinica.png"
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Descargar PNG
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};