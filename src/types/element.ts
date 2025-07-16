import { z } from "zod";

// Enum Element
export const ElementEnum = z.enum([
    "Physical",
    "Fire",
    "Ice",
    "Thunder",
    "Wind",
    "Quantum",
    "Imaginary",
]);

export type Element = z.infer<typeof Element>;
export const Element = z.object({
    id: z.string(),
    name: z.string(),
    desc: z.string(),
    color: z.string().max(7),
    icon: z.string(),
});
