import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Control, Controller, FieldErrors, useFieldArray } from "react-hook-form";

import { CurriculumFormData } from "../../types/curriculum.types";
import { globalStyles, colors } from "../../styles/globalStyles";

interface Props {
  control: Control<CurriculumFormData>;
  errors: FieldErrors<CurriculumFormData>;
}

export default function CurriculumAcademicForm({ control, errors }: Props) {
  const { fields, append, remove } = useFieldArray({ control, name: "academicDatas" });

  return (
    <View>
      <View style={globalStyles.sectionHeaderRow}>
        <Text style={globalStyles.title2}>2. DATOS ACADÉMICOS</Text>
        <TouchableOpacity onPress={() => append({ year: "", institution: "", qualification: "", final_grade: "" })} style={globalStyles.btnAdd}>
          <Text style={globalStyles.btnAddText}>+</Text>
        </TouchableOpacity>
      </View>

      {fields.length === 0 && (
        <View style={globalStyles.emptyCard}>
          <Text style={globalStyles.emptyText}>
            No existen estudios registrados.{"\n"}Presiona <Text style={globalStyles.emptyTextBold}>+</Text> para agregar uno.
          </Text>
        </View>
      )}

      {fields.map((field, index) => (
        <View key={field.id} style={globalStyles.tableRowCard}>

          <View style={globalStyles.badgeRow}>
            <View style={globalStyles.badge}>
              <Text style={globalStyles.badgeText}>ESTUDIO {index + 1}</Text>
            </View>
            <TouchableOpacity onPress={() => remove(index)} style={globalStyles.btnRemove}>
              <Text style={globalStyles.btnRemoveText}>−</Text>
            </TouchableOpacity>
          </View>

          <Text style={globalStyles.title3}>Año</Text>
          <Controller
            control={control}
            name={`academicDatas.${index}.year`}
            rules={{ required: "El año es obligatorio", pattern: { value: /^\d{4}$/, message: "Año inválido (ej. 2020)" } }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                value={value} onChangeText={onChange}
                placeholder="Ej: 2012" placeholderTextColor={colors.textLight}
                keyboardType="numeric" maxLength={4}
                style={[globalStyles.input, errors.academicDatas?.[index]?.year && globalStyles.inputError]}
              />
            )}
          />
          {errors.academicDatas?.[index]?.year && <Text style={globalStyles.errorText}>{errors.academicDatas[index]?.year?.message}</Text>}

          <Text style={globalStyles.title3}>Institución</Text>
          <Controller
            control={control}
            name={`academicDatas.${index}.institution`}
            rules={{ required: "La institución es obligatoria" }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                value={value} onChangeText={onChange}
                placeholder="Ej: Fernández Salvador" placeholderTextColor={colors.textLight}
                style={[globalStyles.input, errors.academicDatas?.[index]?.institution && globalStyles.inputError]}
              />
            )}
          />
          {errors.academicDatas?.[index]?.institution && <Text style={globalStyles.errorText}>{errors.academicDatas[index]?.institution?.message}</Text>}

          <Text style={globalStyles.title3}>Título o Mención</Text>
          <Controller
            control={control}
            name={`academicDatas.${index}.qualification`}
            rules={{ required: "El título es obligatorio" }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                value={value} onChangeText={onChange}
                placeholder="Ej: Bachiller" placeholderTextColor={colors.textLight}
                style={[globalStyles.input, errors.academicDatas?.[index]?.qualification && globalStyles.inputError]}
              />
            )}
          />
          {errors.academicDatas?.[index]?.qualification && <Text style={globalStyles.errorText}>{errors.academicDatas[index]?.qualification?.message}</Text>}

          <Text style={globalStyles.title3}>Nota Final</Text>
          <Controller
            control={control}
            name={`academicDatas.${index}.final_grade`}
            render={({ field: { onChange, value } }) => (
              <TextInput
                value={value} onChangeText={onChange}
                placeholder="Ej: 8" placeholderTextColor={colors.textLight}
                keyboardType="numeric"
                style={globalStyles.input}
              />
            )}
          />

        </View>
      ))}
    </View>
  );
}