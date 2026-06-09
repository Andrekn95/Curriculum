// src/components/curriculum/CurriculumWorkForm.tsx
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useFieldArray, Control, FieldErrors, Controller } from "react-hook-form";import {  CurriculumFormData, WorkExperience } from "../../types/curriculum.types";
import { globalStyles } from "../../styles/globalStyles";

interface Props {
  control: Control<CurriculumFormData>;
  errors: FieldErrors<CurriculumFormData>;
}


const emptyWork: WorkExperience = {
  company: "",
  position: "",
  start_date: "",
  end_date: "",
  activities: "",
};

const CurriculumWorkForm: React.FC<Props> = ({ control, errors }) => {  const { fields, append, remove } = useFieldArray({ control, name: "workExperiences" });

  return (
    <View>
      {/* Encabezado */}
      <View style={globalStyles.sectionHeaderRow}>
        <Text style={globalStyles.title2}>3. EXPERIENCIA LABORAL</Text>
        <TouchableOpacity style={globalStyles.btnAdd} onPress={() => append(emptyWork)} activeOpacity={0.7}>
          <Text style={globalStyles.btnAddText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Estado vacío */}
      {fields.length === 0 && (
        <View style={globalStyles.emptyCard}>
          <Text style={globalStyles.emptyText}>
            Sin experiencia laboral.{"\n"}
            Presiona <Text style={globalStyles.emptyTextBold}>+</Text> para agregar una.
          </Text>
        </View>
      )}

      {/* Tarjetas */}
      {fields.map((field, index) => (
        <View key={field.id} style={globalStyles.tableRowCard}>

          {/* Badge + botón eliminar */}
          <View style={globalStyles.badgeRow}>
            <View style={globalStyles.badge}>
              <Text style={globalStyles.badgeText}>Registro #{index + 1}</Text>
            </View>
            <TouchableOpacity style={globalStyles.btnRemove} onPress={() => remove(index)} activeOpacity={0.7}>
              <Text style={globalStyles.btnRemoveText}>−</Text>
            </TouchableOpacity>
          </View>

          {/* Año */}
          <Text style={globalStyles.title3}>Año</Text>
          <Controller
            control={control}
            name={`workExperiences.${index}.start_date`}
            rules={{
              required: "El año es requerido",
              pattern: { value: /^\d{4}$/, message: "Ingresa un año válido (ej. 2022)" },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[globalStyles.input, errors.workExperiences?.[index]?.start_date && globalStyles.inputError]}
                placeholder="Ej. 2022"
                placeholderTextColor="#94a3b8"
                keyboardType="numeric"
                maxLength={4}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.workExperiences?.[index]?.start_date && (
            <Text style={globalStyles.errorText}>{errors.workExperiences[index]?.start_date?.message}</Text>
          )}

          {/* Institución o Empresa */}
          <Text style={globalStyles.title3}>Institución o Empresa</Text>
          <Controller
            control={control}
            name={`workExperiences.${index}.company`}
            rules={{ required: "La institución o empresa es requerida" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[globalStyles.input, errors.workExperiences?.[index]?.company && globalStyles.inputError]}
                placeholder="Ej. Ministerio de Turismo"
                placeholderTextColor="#94a3b8"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.workExperiences?.[index]?.company && (
            <Text style={globalStyles.errorText}>{errors.workExperiences[index]?.company?.message}</Text>
          )}

          {/* Cargo */}
          <Text style={globalStyles.title3}>Cargo</Text>
          <Controller
            control={control}
            name={`workExperiences.${index}.position`}
            rules={{ required: "El cargo es requerido" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[globalStyles.input, errors.workExperiences?.[index]?.position && globalStyles.inputError]}
                placeholder="Ej. Guía Turístico / Coordinador"
                placeholderTextColor="#94a3b8"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.workExperiences?.[index]?.position && (
            <Text style={globalStyles.errorText}>{errors.workExperiences[index]?.position?.message}</Text>
          )}

          {/* Actividades Desarrolladas */}
          <Text style={globalStyles.title3}>Actividades Desarrolladas</Text>
          <Controller
            control={control}
            name={`workExperiences.${index}.activities`}
            rules={{ required: "Las actividades son requeridas" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[globalStyles.input, errors.workExperiences?.[index]?.activities && globalStyles.inputError, { height: 90, textAlignVertical: "top" }]}
                placeholder="Describe las actividades realizadas en el cargo..."
                placeholderTextColor="#94a3b8"
                multiline
                numberOfLines={4}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.workExperiences?.[index]?.activities && (
            <Text style={globalStyles.errorText}>{errors.workExperiences[index]?.activities?.message}</Text>
          )}

        </View>
      ))}
    </View>
  );
};

export default CurriculumWorkForm;
