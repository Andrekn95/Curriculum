// src/services/curriculum.service.ts
import axios from "axios";
import { CurriculumFormData } from "../types/curriculum.types";

// ─── CONFIGURACIÓN BASE ────────────────────────────────
const BASE_URL = "http://192.168.100.3:5000";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

// ─── MAPEO: FormData → Payload que espera Flask ────────
export const buildCurriculumPayload = (data: CurriculumFormData, user_id: number) => ({
  user_id,
  academic: data.academicDatas.map((a) => ({
    institution: a.institution,
    qualification: a.qualification,
    start_date: `${a.year}-01-01`,
  })),
  work: data.workExperiences.map((w) => ({
    company: w.company,
    position: w.position,
    description: w.activities,
    years: w.start_date,
  })),
  additional: data.additionalInformations.map((ad) => ({
    title: ad.title,
    description: ad.description,
  })),
});

// ─── ENDPOINT ──────────────────────────────────────────
export const saveCurriculum = async (data: CurriculumFormData, user_id: number = 3) => {
  const payload = buildCurriculumPayload(data, user_id);
  console.log("📦 Payload enviado:", JSON.stringify(payload, null, 2));
  const response = await api.post("/api/curriculum", payload);
  return response.data;
};

export default api;