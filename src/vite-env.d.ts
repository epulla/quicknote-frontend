/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
  readonly VITE_MAX_LENGTH_NOTE_CONTENT: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
