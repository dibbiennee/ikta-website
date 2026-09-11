// Tipi e stato iniziale dei form.
// Vive fuori dal file 'use server' perche una server-action file
// puo esportare solo funzioni async.

export type FormState = {
  ok: boolean;
  message: string;
};

export const initialFormState: FormState = { ok: false, message: '' };
