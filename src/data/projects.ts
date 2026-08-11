export interface Project {
    title: string;
    category: string;
    description: string;
    tags: string[];
    metrics: string;
    githubUrl: string;
    demoUrl?: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Doc Image Normalizer",
      category: "Computer Vision / Preprocessing",
      description: "Pipeline de restauration d'images de documents dégradés. Correction d'homographie et déparasitage.",
      tags: ["OpenCV", "FastAPI", "Pytest", "Docker"],
      metrics: "CER -15.4% | Latence < 120ms",
      githubUrl: "https://github.com/votre-user/doc-image-normalizer",
      demoUrl: "https://huggingface.co/spaces/votre-user/doc-normalizer-demo"
    },
    {
      title: "Invoice KIE LayoutLMv3",
      category: "Document Understanding",
      description: "Fine-tuning de LayoutLMv3 pour l'extraction automatique de paires clé-valeur sur factures denses.",
      tags: ["LayoutLMv3", "PyTorch", "Hugging Face", "Pydantic"],
      metrics: "F1-Score 89.2%",
      githubUrl: "https://github.com/votre-user/invoice-kie-layoutlmv3"
    }
  ];