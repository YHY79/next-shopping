import zod from "zod";

const envSchema = zod.object({
  DATABASE_URL: zod.string().min(1),
  AZURE_AD_B2C_TENANT_NAME: zod.string().min(1),
  AZURE_AD_B2C_PRIMARY_USER_FLOW: zod.string().min(1),
  AZURE_AD_B2C_CLIENT_ID: zod.string().min(1),
  AZURE_AD_B2C_CLIENT_SECRET: zod.string().min(1),
  NEXTAUTH_URL: zod.string().min(1),
  NEXTAUTH_SECRET: zod.string().min(1),
  
});

export const env = envSchema.parse(process.env);
