'use server';

import { z } from 'zod';
import { analyzeTreeHealth } from '@/ai/flows/tree-health-analysis';
import type { AnalyzeTreeHealthOutput } from '@/ai/flows/tree-health-analysis';

const fileToDataURI = async (file: File): Promise<string> => {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return `data:${file.type};base64,${buffer.toString('base64')}`;
};

const formSchema = z.object({
  photo: z.instanceof(File).refine((file) => file.size > 0, 'Photo is required.'),
  treeDescription: z.string().min(1, 'Tree description is required.'),
  sensorData: z.string().optional(),
});

type ValidationState = {
  data: AnalyzeTreeHealthOutput | null;
  error: string | null;
};

export async function handleValidation(prevState: ValidationState, formData: FormData): Promise<ValidationState> {
  try {
    const parsed = formSchema.safeParse({
      photo: formData.get('photo'),
      treeDescription: formData.get('treeDescription'),
      sensorData: formData.get('sensorData'),
    });

    if (!parsed.success) {
      return {
        data: null,
        error: parsed.error.errors.map((e) => e.message).join(', '),
      };
    }

    const { photo, treeDescription, sensorData } = parsed.data;

    const photoDataUri = await fileToDataURI(photo);

    const result = await analyzeTreeHealth({
      photoDataUri,
      treeDescription,
      sensorData,
    });
    
    return { data: result, error: null };
  } catch (error) {
    console.error('Validation Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { data: null, error: `Failed to analyze tree health: ${errorMessage}` };
  }
}
