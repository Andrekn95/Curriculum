// src/components/curriculum/CurriculumAdditionalForm.tsx
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useFieldArray, Control, FieldErrors, Controller } from "react-hook-form";
import { CurriculumFormData, AdditionalInformation } from "../../types/curriculum.types";
import { globalStyles, colors } from "../../styles/globalStyles";

interface Props {
  control: Control<CurriculumFormData>;
  errors: FieldErrors<CurriculumFormData>;
}

const emptyAdditional: AdditionalInformation = {
  date: "",
  institution: "",
  title: "",
  description: "",
};

export default function CurriculumAdditionalForm({ control, errors }: Props) {
  const { fields, append, remove } = useFieldArray({ control, name: "additionalInformations" });

  return (
    <View>
      <View style={globalStyles.sectionHeaderRow}>
        <Text style={globalStyles.title2}>5. INFORMACIÓN ADICIONAL</Text>
        <TouchableOpacity style={globalStyles.btnAdd} onPress={() => append(emptyAdditional)} activeOpacity={0.7}>
          <Text style={globalStyles.btnAddText}>+</Text>
        </TouchableOpacity>
      </View>

      {fields.length === 0 && (
        <View style={globalStyles.emptyCard}>
          <Text style={globalStyles.emptyText}>
            Sin información adicional.{"\n"}Presiona <Text style={globalStyles.emptyTextBold}>+</Text> para agregar una.
          </Text>
        </View>
      )}

      {fields.map((field, index) => (
        <View key={field.id} style={globalStyles.tableRowCard}>

          <View style={globalStyles.badgeRow}>
            <View style={globalStyles.badge}>
              <Text style={globalStyles.badgeText}>REGISTRO {index + 1}</Text>
            </View>
            <TouchableOpacity style={globalStyles.btnRemove} onPress={() => remove(index)} activeOpacity={0.7}>
              <Text style={globalStyles.btnRemoveText}>−</Text>
            </TouchableOpacity>
          </View>

          {/* Año */}
          <Text style={globalStyles.title3}>Año</Text>
          <Controller
            control={control}
            name={`additionalInformations.${index}.date`}
            rules={{
              required: "El año es obligatorio",
              pattern: { value: /^\d{4}$/, message: "Año inválido (ej. 2022)" },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[globalStyles.input, errors.additionalInformations?.[index]?.date && globalStyles.inputError]}
                placeholder="Ej. 2022"
                placeholderTextColor={colors.textLight}
                keyboardType="numeric"
                maxLength={4}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.additionalInformations?.[index]?.date && (
            <Text style={globalStyles.errorText}>{errors.additionalInformations[index]?.date?.message}</Text>
          )}

          {/* Institución */}
          <Text style={globalStyles.title3}>Institución</Text>
          <Controller
            control={control}
            name={`additionalInformations.${index}.institution`}
            rules={{ required: "La institución es obligatoria" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[globalStyles.input, errors.additionalInformations?.[index]?.institution && globalStyles.inputError]}
                placeholder="Ej. SECAP / Cruz Roja"
                placeholderTextColor={colors.textLight}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.additionalInformations?.[index]?.institution && (
            <Text style={globalStyles.errorText}>{errors.additionalInformations[index]?.institution?.message}</Text>
          )}

          {/* Logro o Hecho Relevante */}
          <Text style={globalStyles.title3}>Logro o Hecho Relevante</Text>
          <Controller
            control={control}
            name={`additionalInformations.${index}.title`}
            rules={{ required: "El logro o hecho relevante es obligatorio" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[globalStyles.input, errors.additionalInformations?.[index]?.title && globalStyles.inputError]}
                placeholder="Ej. Curso de Primeros Auxilios"
                placeholderTextColor={colors.textLight}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.additionalInformations?.[index]?.title && (
            <Text style={globalStyles.errorText}>{errors.additionalInformations[index]?.title?.message}</Text>
          )}

          {/* Detalle del Logro o Hecho Relevante */}
          <Text style={globalStyles.title3}>Detalle del Logro o Hecho Relevante</Text>
          <Controller
            control={control}
            name={`additionalInformations.${index}.description`}
            rules={{ required: "El detalle es obligatorio" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[globalStyles.input, errors.additionalInformations?.[index]?.description && globalStyles.inputError, { height: 90, textAlignVertical: "top" }]}
                placeholder="Describe el logro o hecho relevante..."
                placeholderTextColor={colors.textLight}
                multiline
                numberOfLines={4}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.additionalInformations?.[index]?.description && (
            <Text style={globalStyles.errorText}>{errors.additionalInformations[index]?.description?.message}</Text>
          )}

        </View>
      ))}
    </View>
  );
}