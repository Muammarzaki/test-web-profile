import { ProgramData } from '../utils';
import programData from '../data/program-studi.json';

/**
 * Custom error class for API errors
 */
export class APIError extends Error {
  constructor(
    message: string,
    public status?: number,
    public statusText?: string
  ) {
    super(message);
    this.name = 'APIError';
  }
}

/**
 * Program API service that uses local JSON data
 */
export const programAPI = {
  /**
   * Get all programs
   */
  getAllPrograms: async (): Promise<ProgramData> => {
    return Promise.resolve(programData as ProgramData);
  },

  /**
   * Get program by ID
   */
  getProgramById: async (id: string): Promise<ProgramData[keyof ProgramData]> => {
    const program = programData[id as keyof typeof programData];
    if (!program) {
      throw new APIError('Program not found');
    }
    return Promise.resolve(program as ProgramData[keyof ProgramData]);
  },

  /**
   * Get program sections
   */
  getProgramSections: async (
    programId: string,
    sectionId: string
  ): Promise<any> => {
    const program = programData[programId as keyof typeof programData];
    if (!program) {
      throw new APIError('Program not found');
    }
    const section = program.sections[sectionId];
    if (!section) {
      throw new APIError('Section not found');
    }
    return Promise.resolve(section);
  },
};

/**
 * Error handler utility
 */
export const handleAPIError = (error: unknown): string => {
  if (error instanceof APIError) {
    return error.message;
  }
  return 'An unexpected error occurred';
};