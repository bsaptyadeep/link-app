"use client"

import type React from "react";
import { Suspense, useState } from "react";
import SignupForm from "./components/SignupForm";

export default function SignupPage() {
  return (
    <Suspense>
      <SignupForm />
    </Suspense>
  )
}
