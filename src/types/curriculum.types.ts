

// ================================
// TABLA: academic_datas
// ================================
export interface AcademicData {
  id?: number;
  curriculum_id?: number;

  year: string;
  institution: string;
  qualification: string;
  final_grade: string;
}

// ================================
// TABLA: work_experiences
// ================================
export interface WorkExperience {
  id?: number;
  curriculum_id?: number;

  company: string;
  position: string;
  start_date: string;
  end_date: string;
  activities: string;
}

// ================================
// TABLA: additional_informations
// ================================
export interface AdditionalInformation {
  id?: number;
  curriculum_id?: number;

  title: string;
  institution: string;
  date: string;
  description: string;
}

// ================================
// FORMULARIO COMPLETO DEL CV
// ================================
export interface CurriculumFormData {
  academicDatas: AcademicData[];
  workExperiences: WorkExperience[];
  additionalInformations: AdditionalInformation[];
}

// ================================
// PAYLOAD GENERAL
// ================================
export interface CurriculumPayload {
  user_id: number;

  academicDatas: AcademicData[];
  workExperiences: WorkExperience[];
  additionalInformations: AdditionalInformation[];
}