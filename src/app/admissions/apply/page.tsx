"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type FileEntry = { name: string; size: number };

export default function ApplyPage() {
  const { t } = useLanguage();
  const [files, setFiles] = useState<FileEntry[]>([]);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [reference, setReference] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const subLinks = [
    { href: "/admissions/process", label: t.admissionsSub.process },
    { href: "/admissions/fees", label: t.admissionsSub.fees },
    { href: "/admissions/apply", label: t.admissionsSub.apply },
    { href: "/admissions/eligibility", label: t.admissionsSub.eligibility },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) return;
    const newFiles: FileEntry[] = [];
    for (let i = 0; i < fileList.length; i++) {
      const f = fileList[i];
      // 5 MB limit per spec
      if (f.size > 5 * 1024 * 1024) {
        setErrorMsg(`File "${f.name}" exceeds the 5 MB limit and was not added.`);
        continue;
      }
      newFiles.push({ name: f.name, size: f.size });
    }
    setFiles((prev) => [...prev, ...newFiles]);
    setErrorMsg("");
  };

  const removeFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const payload: Record<string, unknown> = {
      studentName: formData.get("studentName"),
      dob: formData.get("dob"),
      gender: formData.get("gender"),
      applyingClass: formData.get("applyingClass"),
      fatherName: formData.get("fatherName"),
      motherName: formData.get("motherName"),
      parentPhone: formData.get("parentPhone"),
      parentEmail: formData.get("parentEmail"),
      parentOccupation: formData.get("parentOccupation") || "",
      address: formData.get("address"),
      previousSchool: formData.get("previousSchool") || "",
      previousClass: formData.get("previousClass") || "",
      documents: files,
    };

    try {
      const res = await fetch("/api/admissions/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed");
      }
      setReference(data.reference);
      setStatus("success");
      // Reset form
      (e.target as HTMLFormElement).reset();
      setFiles([]);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Submission failed");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <>
        <PageHero
          title={t.admissions.applyTitle}
          subtitle={t.admissions.applyBody}
          breadcrumb={`${t.nav.admissions} / ${t.admissionsSub.apply}`}
        />
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="border-line bg-surface rounded-[2rem] shadow-[var(--shadow-lift)] text-center">
              <CardContent className="pt-10 pb-10">
                <div className="w-16 h-16 rounded-full bg-[var(--success)]/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-9 h-9 text-[var(--success)]" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--accent)] mb-2">
                  Application Received
                </h2>
                <p className="text-sm text-[var(--ink)] leading-relaxed mb-5">
                  Thank you. Your application has been submitted successfully. Our admissions team will contact you within 2–3 working days at the phone number and email you provided.
                </p>
                <div className="inline-block px-5 py-3 bg-cream rounded-2xl border border-line mb-6">
                  <p className="text-xs text-[var(--muted-ink)] uppercase tracking-wider mb-1">
                    Your Reference Number
                  </p>
                  <p className="text-lg font-bold text-[var(--maroon)]">{reference}</p>
                </div>
                <p className="text-xs text-[var(--muted-ink)] mb-6">
                  Please save this reference number for future correspondence.
                </p>
                <Button
                  onClick={() => setStatus("idle")}
                  variant="outline"
                  className="border-[var(--maroon)] text-[var(--maroon)]"
                >
                  Submit Another Application
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        title={t.admissions.applyTitle}
        subtitle={t.admissions.applyBody}
        breadcrumb={`${t.nav.admissions} / ${t.admissionsSub.apply}`}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <SubNav title={t.nav.admissions} links={subLinks} />

            <div>
              <form onSubmit={onSubmit} className="space-y-8">
                {/* Student details */}
                <Card className="border-line bg-surface rounded-[1.5rem] shadow-[var(--shadow-soft)] overflow-hidden">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold text-[var(--accent)] mb-4">
                      Student Details
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="studentName">Student&apos;s Full Name *</Label>
                        <Input id="studentName" name="studentName" required className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="dob">Date of Birth *</Label>
                        <Input id="dob" name="dob" type="date" required className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="gender">Gender *</Label>
                        <Select name="gender" required>
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="applyingClass">Applying for Class *</Label>
                        <Select name="applyingClass" required>
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Select class" />
                          </SelectTrigger>
                          <SelectContent>
                            {["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"].map((c) => (
                              <SelectItem key={c} value={`Class ${c}`}>
                                Class {c}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Parent details */}
                <Card className="border-line bg-surface rounded-[1.5rem] shadow-[var(--shadow-soft)] overflow-hidden">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold text-[var(--accent)] mb-4">
                      Parent / Guardian Details
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fatherName">Father&apos;s Name *</Label>
                        <Input id="fatherName" name="fatherName" required className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="motherName">Mother&apos;s Name *</Label>
                        <Input id="motherName" name="motherName" required className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="parentPhone">Phone Number *</Label>
                        <Input id="parentPhone" name="parentPhone" type="tel" required className="mt-1.5" placeholder="+91 ..." />
                      </div>
                      <div>
                        <Label htmlFor="parentEmail">Email Address *</Label>
                        <Input id="parentEmail" name="parentEmail" type="email" required className="mt-1.5" />
                      </div>
                      <div className="sm:col-span-2">
                        <Label htmlFor="parentOccupation">Occupation (optional)</Label>
                        <Input id="parentOccupation" name="parentOccupation" className="mt-1.5" />
                      </div>
                      <div className="sm:col-span-2">
                        <Label htmlFor="address">Residential Address *</Label>
                        <Textarea id="address" name="address" required className="mt-1.5" rows={3} />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Previous school */}
                <Card className="border-line bg-surface rounded-[1.5rem] shadow-[var(--shadow-soft)] overflow-hidden">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold text-[var(--accent)] mb-1">
                      Previous School (if applicable)
                    </h3>
                    <p className="text-xs text-[var(--muted-ink)] mb-4">
                      Required only for admissions to Class II and above.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="previousSchool">Previous School Name</Label>
                        <Input id="previousSchool" name="previousSchool" className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="previousClass">Last Class Completed</Label>
                        <Input id="previousClass" name="previousClass" className="mt-1.5" placeholder="e.g. Class V" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Documents */}
                <Card className="border-line bg-surface rounded-[1.5rem] shadow-[var(--shadow-soft)] overflow-hidden">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold text-[var(--accent)] mb-1">
                      Document Upload
                    </h3>
                    <p className="text-xs text-[var(--muted-ink)] mb-4">
                      Upload birth certificate, photographs, previous school records, etc. Max 5 MB per file. Multiple files allowed.
                    </p>

                    <label
                      htmlFor="documents"
                      className="flex flex-col items-center justify-center gap-2 p-8 border-2 border-dashed border-line rounded-2xl cursor-pointer hover:border-[var(--maroon)] hover:bg-cream/50 transition-all"
                    >
                      <Upload className="w-8 h-8 text-[var(--maroon)]" />
                      <span className="text-sm font-medium text-[var(--accent)]">
                        Click to upload documents
                      </span>
                      <span className="text-xs text-[var(--muted-ink)]">
                        PDF, JPG, PNG — up to 5 MB each
                      </span>
                      <input
                        id="documents"
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        className="sr-only"
                      />
                    </label>

                    {files.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {files.map((f, idx) => (
                          <li
                            key={idx}
                            className="flex items-center justify-between p-3 bg-cream rounded-xl text-sm border border-line"
                          >
                            <span className="truncate text-[var(--ink)]">{f.name}</span>
                            <div className="flex items-center gap-3 flex-shrink-0">
                              <span className="text-xs text-[var(--muted-ink)]">
                                {(f.size / 1024).toFixed(0)} KB
                              </span>
                              <button
                                type="button"
                                onClick={() => removeFile(idx)}
                                className="text-xs text-[var(--alert)] hover:underline"
                              >
                                Remove
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}

                    {errorMsg && (
                      <p className="mt-3 text-xs text-[var(--alert)] flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errorMsg}
                      </p>
                    )}
                  </CardContent>
                </Card>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="bg-maroon hover:bg-maroon-deep text-white min-w-[200px] rounded-full font-semibold shadow-md"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                  {status === "error" && (
                    <p className="text-sm text-[var(--alert)] flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4" />
                      {errorMsg || t.contact.submitError}
                    </p>
                  )}
                </div>

                <p className="text-xs text-[var(--muted-ink)] leading-relaxed">
                  By submitting this form, you confirm that the information provided is accurate to the best of your knowledge. The school reserves the right to verify all submitted documents and information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
