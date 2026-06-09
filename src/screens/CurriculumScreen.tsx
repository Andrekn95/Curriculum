// src/screens/CurriculumScreen.tsx
import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useForm } from "react-hook-form";

import { CurriculumFormData } from "../types/curriculum.types";
import { globalStyles } from "../styles/globalStyles";
import { saveCurriculum } from "../services/curriculum.service";

import CurriculumAcademicForm from "../components/curriculum/CurriculumAcademicForm";
import CurriculumWorkForm from "../components/curriculum/CurriculumWorkForm";
import CurriculumAdditionalForm from "../components/curriculum/CurriculumAdditionalForm";

const defaultValues: CurriculumFormData = {
  academicDatas: [],
  workExperiences: [],
  additionalInformations: [],
};

const CurriculumScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CurriculumFormData>({ defaultValues });

  const onSubmit = async (data: CurriculumFormData) => {
    try {
      const result = await saveCurriculum(data, 3); // TODO: reemplaza 1 con el curriculum_id real
      Alert.alert("✅ Guardado", result.message);
    } catch (error) {
      Alert.alert("❌ Error", "No se pudo guardar el CV. Verifica tu conexión.");
    }
  };

  return (
    <View style={globalStyles.screenContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>

        <Text style={globalStyles.title1}>CV Estandarizado</Text>
        <Text style={globalStyles.subtitle}>
          Completa cada sección y presiona Guardar al finalizar.
        </Text>

        <CurriculumAcademicForm control={control} errors={errors} />
        <CurriculumWorkForm control={control} errors={errors} />
        <CurriculumAdditionalForm control={control} errors={errors} />

        <TouchableOpacity
          style={[globalStyles.btnSave, isSubmitting && globalStyles.btnSaveDisabled]}
          onPress={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          activeOpacity={0.8}
        >
          <Text style={globalStyles.btnSaveText}>
            {isSubmitting ? "Guardando..." : "Guardar CV"}
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default CurriculumScreen;