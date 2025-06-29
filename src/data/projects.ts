import { Project } from "../types";
import fintech from "/fintech.png";
import notion from "/notion.png";
import woytrip from "/woytrip.png";
import financial_Agent from "/financial agent.png";
import voidtech from "/voidtech.png";
import chatbot from "/chatbot.png";
import iot from "/iot.png";
import ai from "/ai.jpg";
import agrimrt from "/agrimart.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "Wavelet and Hilbert Transform-Based Feature Extraction and Classification",
    description:
      " Implemented advanced signal processing techniques (Wavelet and Hilbert transforms) with deep learning and machine learning models in Python, increasing classification accuracy on real-world datasets by 15%",
      category: ["Machine learning"],
    image:
      ai,
    tags: [
      "AI",
      "Machine Learning",
      "Prediction",
      "Classification",
    ],
    github: "https://github.com/Akshar-RAO-7/-Wavelet-and-Hilbert-Transform-Based-Feature-Extraction-and-Classification",
  },
  {
    id: 2,
    title: " Healthcare Entity Extraction for Insurance Automation",
    description:
      "Developed and deployed an NLP system using transformer-based architectures (BERT, RoBERTa) in Python to extract patient demographics, diseases, and treatment details from 5,000+ medical transcripts, achieving over 90% accuracy and reducing manual data entry time by 60%.",
      category: ["Natural Language Processing"],
    image: voidtech,
    tags: [
      "Natural Language Processing",
      "Machine Learning",
    ],
    github: "https://github.com/Akshar-RAO-7/Medical-Entity-Extraction-for-Insurance-Claims",
  },
  {
    id: 3,
    title: " Sentiment Analysis for Political Campaigns",
    description:
      "Conducted comprehensive sentiment analysis on 79,930 tweets related to Indian political parties during election campaigns, leveraging advanced NLP pipelines in Python to extract and classify public sentiment as positive, negative, or neutral",
    category: ["Natural Language Processing & Machine Learning "],
    image: fintech,
    tags: [
      "Natural Language Processing ",
      "Machine Learning ",
    ],
    github: "https://github.com/Akshar-RAO-7/Sentiment-Analysis-for-Political-Campaigns",
  }
  ];