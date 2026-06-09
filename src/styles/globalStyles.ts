// src/styles/globalStyles.ts
import { StyleSheet } from "react-native";

// ─── COLORES INSTITUCIONALES ───────────────────────────
const colors = {
  primary: "#003366",
  primaryLight: "#004080",
  accent: "#FF6600",
  accentDark: "#E65C00",
  white: "#FFFFFF",
  bgScreen: "#F8FAFC",
  bgInput: "#F8FAFC",
  bgCard: "#FFFFFF",
  border: "#E2E8F0",
  borderDashed: "#CBD5E1",
  textDark: "#1E293B",
  textMid: "#475569",
  textLight: "#94A3B8",
  textLabel: "#334155",
  error: "#EF4444",
  badge: "#EFF6FF",
  badgeText: "#003366",
};

export const globalStyles = StyleSheet.create({

  // ─── CONTENEDORES ──────────────────────────────────────
  screenContainer: {
    flex: 1,
    backgroundColor: colors.bgScreen,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },

  // ─── TIPOGRAFÍA ────────────────────────────────────────
  title1: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.primary,
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  title2: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.primaryLight,
    marginBottom: 12,
    marginTop: 8,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title3: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textLabel,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: colors.textMid,
    marginBottom: 24,
  },

  // ─── INPUTS ────────────────────────────────────────────
  input: {
    backgroundColor: colors.bgInput,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: colors.textDark,
    marginBottom: 12,
  },
  inputError: {
    borderColor: colors.error,
    backgroundColor: "#FEF2F2",
  },
  errorText: {
    fontSize: 12,
    color: colors.error,
    marginTop: -8,
    marginBottom: 10,
  },

  // ─── TARJETAS / FILAS DINÁMICAS ────────────────────────
  tableRowCard: {
    backgroundColor: colors.bgCard,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  emptyCard: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: colors.borderDashed,
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 13,
    color: colors.textLight,
    textAlign: "center",
    lineHeight: 20,
  },
  emptyTextBold: {
    fontWeight: "700",
    color: colors.primary,
  },

  // ─── CABECERA DE SECCIÓN ───────────────────────────────
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 8,
  },

  // ─── BADGE NÚMERO DE REGISTRO ──────────────────────────
  badgeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  badge: {
    backgroundColor: colors.badge,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.badgeText,
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  // ─── BOTÓN AGREGAR (+) ─────────────────────────────────
  btnAdd: {
    backgroundColor: colors.primary,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  btnAddText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
  },

  // ─── BOTÓN ELIMINAR (-) ────────────────────────────────
  btnRemove: {
    backgroundColor: colors.accent,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  btnRemoveText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
  },

  // ─── BOTÓN GUARDAR PRINCIPAL ───────────────────────────
  btnSave: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    marginTop: 16,
    alignItems: "center",
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  btnSaveDisabled: {
    backgroundColor: colors.textLight,
  },
  btnSaveText: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: 0.3,
  },
  
  cardActions: {
  flexDirection: "row",
  justifyContent: "flex-end",
  marginTop: 8,
},

  // ─── TEXTOS DE TABLA ───────────────────────────────────
  tableCellText: {
    fontSize: 13,
    color: colors.textMid,
  },
  tableCellTextBold: {
    fontSize: 13,
    color: colors.textDark,
    fontWeight: "600",
  },
});

export { colors };