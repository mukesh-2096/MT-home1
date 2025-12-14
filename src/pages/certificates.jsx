import NavbarHome from "../components/NavbarHome";
import HomeFooter from "../components/HomeFooter";
import { Star, QrCode, Loader2, CheckCircle2, AlertCircle, Download, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import certificationIllustration from "../assets/undraw_certification_i2m0.svg";

const certificateTiers = [
	{
		name: "Professional Certificates",
		summary: "Upskill with role-based paths curated with hiring managers.",
		details: ["Role-aligned curricula", "Interactive labs", "Career coaching calls"],
	},
	{
		name: "Advanced Specializations",
		summary: "Deep dive into advanced topics with capstone projects.",
		details: ["Expert mentors", "Capstone feedback", "Peer showcases"],
	},
	{
		name: "Micro-Credentials",
		summary: "Stackable badges that prove mastery of niche skills.",
		details: ["Skill badges", "Mini challenges", "Interview prep resources"],
	},
];

const certificatesDirectory = [
	{
		id: "DIK-CERT-2025-001",
		learner: "Aarav Sharma",
		program: "AI Product Strategist Accelerator",
		issuedOn: "2025-07-18",
		grade: "Distinction",
		hours: 120,
	},
	{
		id: "DIK-CERT-2025-045",
		learner: "Ira Menon",
		program: "Full-Stack Web Developer Professional Certificate",
		issuedOn: "2025-05-02",
		grade: "Honours",
		hours: 150,
	},
	{
		id: "DIK-CERT-2025-088",
		learner: "Vihaan Patel",
		program: "Data Science & AI Advanced Specialization",
		issuedOn: "2025-06-10",
		grade: "Merit",
		hours: 180,
	},
];

function formatIssuedDate(isoDate) {
	return new Date(isoDate).toLocaleDateString(undefined, {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

export default function Certificates() {
	const navigate = useNavigate();
	const qrInputRef = useRef(null);
	const [certificateId, setCertificateId] = useState("");
	const [status, setStatus] = useState("idle");
	const [verifiedCertificate, setVerifiedCertificate] = useState(null);
	const initialFeedback = "Enter a certificate ID to get started.";
	const [feedback, setFeedback] = useState(initialFeedback);

	const handleVerify = (searchId) => {
		const trimmedId = searchId.trim().toUpperCase();
		setCertificateId(trimmedId);
		if (!trimmedId) {
			setFeedback("Enter a certificate ID to continue.");
			setStatus("error");
			setVerifiedCertificate(null);
			return;
		}

		setStatus("loading");
		setFeedback("Authenticating certificate...");
		setVerifiedCertificate(null);

		window.setTimeout(() => {
			const match = certificatesDirectory.find((certificate) => certificate.id === trimmedId);

			if (match) {
				setVerifiedCertificate(match);
				setStatus("success");
				setFeedback("Certificate verified. You can generate the credential now.");
			} else {
				setStatus("error");
				setFeedback("We could not find a certificate with that ID. Check the code and try again.");
			}
		}, 700);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		handleVerify(certificateId);
	};

	const handleQrUpload = (event) => {
		const selectedFile = event.target.files?.[0];
		if (!selectedFile) {
			return;
		}

		// Demo behaviour: we map any scanned QR to a known certificate.
		const inferredId = "DIK-CERT-2025-001";
		setCertificateId(inferredId);
		handleVerify(inferredId);
	};

	const handleGenerateCertificate = () => {
		if (!verifiedCertificate) {
			return;
		}

		const certificateMarkup = `<!doctype html><html><head><meta charset="utf-8" /><title>${verifiedCertificate.id}</title>
		<style>
			body { font-family: 'Segoe UI', sans-serif; background: #f5f7fb; margin: 0; padding: 48px; color: #1f2937; }
			.certificate { max-width: 720px; margin: 0 auto; background: white; border-radius: 24px; padding: 56px; box-shadow: 0 40px 90px -40px rgba(15,23,42,0.25); border: 1px solid #e2e8f0; }
			.header { text-transform: uppercase; letter-spacing: 0.35em; color: #2563eb; font-weight: 600; font-size: 12px; }
			h1 { font-size: 36px; margin: 24px 0 16px; color: #0f172a; }
			.meta { margin-top: 32px; display: grid; gap: 12px; font-size: 14px; color: #475569; }
			.signature { margin-top: 48px; display: flex; justify-content: space-between; align-items: center; font-size: 14px; }
			.signature span { display: block; }
			button { margin-top: 32px; padding: 12px 20px; border-radius: 999px; border: none; background: #2563eb; color: white; font-weight: 600; cursor: pointer; }
			@media print { body { background: white; padding: 0; } .certificate { box-shadow: none; border: 0; margin: 0 auto; } button { display: none; } }
		</style>
		</head><body>
		<div class="certificate">
			<div class="header">Certificate of Achievement</div>
			<h1>${verifiedCertificate.learner}</h1>
			<p>This certifies successful completion of the ${verifiedCertificate.program} with a performance rating of <strong>${verifiedCertificate.grade}</strong>.</p>
			<div class="meta">
				<div><strong>Certificate ID:</strong> ${verifiedCertificate.id}</div>
				<div><strong>Issued on:</strong> ${formatIssuedDate(verifiedCertificate.issuedOn)}</div>
				<div><strong>Total learning hours:</strong> ${verifiedCertificate.hours} hours</div>
			</div>
			<div class="signature">
				<span><strong>Nikila Rao</strong><br />Director, Diksuchi Credentials</span>
				<span><strong>Verified digitally</strong><br />Diksuchi Trust Network</span>
			</div>
			<button onclick="window.print()">Print or Save as PDF</button>
		</div>
		</body></html>`;

		const newWindow = window.open("", "_blank", "noopener,noreferrer");
		if (newWindow) {
			newWindow.document.write(certificateMarkup);
			newWindow.document.close();
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-[#f7fbff] via-white to-[#eef3ff] text-slate-900">
			<NavbarHome />

			<main className="mx-auto flex max-w-5xl flex-col gap-16 px-6 pb-24 pt-16">
				<section className="flex flex-col items-center text-center">
					<div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#eff6ff] to-white shadow-lg shadow-[#2563eb]/20 ring-1 ring-blue-100">
						<img src={certificationIllustration} alt="Certificate illustration" className="h-20 w-20 object-contain" />
					</div>
					<h1 className="mt-6 text-4xl font-extrabold text-[#143c88] md:text-5xl">Verify Certificate</h1>
					<p className="mt-3 max-w-2xl text-base text-slate-600 md:text-lg">
						Check the authenticity of your Diksuchi credential by entering the certificate ID or scanning the QR code printed on the document.
					</p>
				</section>

				<section className="grid gap-10 rounded-[32px] bg-gradient-to-b from-white via-[#f5f9ff] to-white p-10 shadow-[0_40px_120px_-60px_rgba(29,78,216,0.28)] ring-1 ring-blue-100 lg:grid-cols-[1.05fr_0.95fr]">
					<div className="flex flex-col gap-8">
						<div className="text-left">
							<h2 className="text-2xl font-semibold text-slate-900">Enter Certificate Details</h2>
							<p className="mt-2 text-sm text-slate-500">
								You can verify by entering the certificate ID or scanning the QR code on your Diksuchi certificate.
							</p>
						</div>

						<form onSubmit={handleSubmit} className="flex flex-col gap-6">
							<label className="flex flex-col gap-3">
								<span className="text-sm font-semibold text-slate-800">Certificate ID</span>
								<div className="flex flex-col gap-3 rounded-2xl border border-blue-100 bg-white p-4 shadow-[inset_0_1px_3px_rgba(37,99,235,0.12)]">
									<input
										value={certificateId}
										onChange={(event) => {
											setCertificateId(event.target.value);
											if (status !== "idle") {
												setStatus("idle");
												setFeedback(initialFeedback);
												setVerifiedCertificate(null);
											}
										}}
										placeholder="e.g. DIK-CERT-2025-001"
										className="w-full border-none text-base font-medium text-slate-900 outline-none placeholder:text-slate-400"
										aria-label="Certificate identifier"
										spellCheck={false}
									/>
									<div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
										<span>Find the certificate ID at the bottom of your certificate.</span>
										<input
											type="file"
											accept="image/*"
											ref={qrInputRef}
											onChange={handleQrUpload}
											className="hidden"
										/>
									</div>
								</div>
							</label>

							<div className="flex flex-wrap items-center gap-3">
								<button
									type="submit"
									className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] px-7 py-3 text-sm font-semibold text-white transition hover:from-[#1e40af] hover:to-[#1d4ed8]"
									disabled={status === "loading"}
								>
									{status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
									Verify certificate
								</button>
								<button
									type="button"
									onClick={() => {
										setCertificateId("");
										setStatus("idle");
										setFeedback(initialFeedback);
										setVerifiedCertificate(null);
									}}
									className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
								>
									Clear
								</button>
							</div>
						</form>

						<div
							className={`inline-flex items-center gap-2 text-sm font-medium ${
								status === "success"
									? "text-emerald-600"
									: status === "error"
									? "text-rose-600"
									: "text-slate-500"
							}`}
						>
							{status === "success" && <CheckCircle2 className="h-4 w-4" />}
							{status === "error" && <AlertCircle className="h-4 w-4" />}
							{status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
							<span>{feedback}</span>
						</div>
					</div>

					<div className="flex h-full flex-col justify-between rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_30px_70px_-50px_rgba(37,99,235,0.4)]">
						{verifiedCertificate ? (
							<div className="flex h-full flex-col gap-5">
								<div>
									<p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">Verified credential</p>
									<h3 className="mt-2 text-2xl font-semibold text-slate-900">{verifiedCertificate.learner}</h3>
									<p className="text-sm text-slate-500">Certificate ID: {verifiedCertificate.id}</p>
								</div>
								<div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50 p-5 shadow-sm">
									<p className="text-sm font-semibold text-slate-600">Program</p>
									<p className="text-base font-semibold text-slate-900">{verifiedCertificate.program}</p>
									<div className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
										<div>
											<span className="block text-xs font-semibold uppercase text-slate-400">Issued on</span>
											{formatIssuedDate(verifiedCertificate.issuedOn)}
										</div>
										<div>
											<span className="block text-xs font-semibold uppercase text-slate-400">Total hours</span>
											{verifiedCertificate.hours} hours
										</div>
										<div>
											<span className="block text-xs font-semibold uppercase text-slate-400">Performance</span>
											{verifiedCertificate.grade}
										</div>
									</div>
								</div>
								<button
									onClick={handleGenerateCertificate}
									className="inline-flex items-center gap-2 self-start rounded-full bg-gradient-to-r from-[#0f172a] to-[#1d4ed8] px-6 py-3 text-sm font-semibold text-white transition hover:from-[#0b1a33] hover:to-[#1e3a8a]"
								>
									<Download className="h-4 w-4" />
									Generate certificate
								</button>
							</div>
						) : (
							<div className="flex h-full flex-col items-start justify-center gap-4 text-slate-500">
								<h3 className="text-xl font-semibold text-slate-600">Scan QR Code</h3>
								<p className="text-sm leading-relaxed">
									Submit a certificate ID or scan a QR code to preview and generate the official document.
								</p>
								<ul className="space-y-2 text-xs">
									<li>• Use the camera option on desktop or mobile to scan printed certificates.</li>
									<li>• Verified certificates include a secure digital signature and issuance timestamp.</li>
								</ul>
								<button
									type="button"
									onClick={() => qrInputRef.current?.click()}
									className="inline-flex items-center gap-2 rounded-full border border-dashed border-blue-300 px-5 py-2 text-sm font-semibold text-blue-600 transition hover:border-blue-400 hover:text-blue-800"
								>
									<QrCode className="h-4 w-4" />
									QR scanner ready
								</button>
							</div>
						)}
					</div>
				</section>

				<div className="flex items-center gap-6 text-xs font-medium text-slate-500">
					<span className="h-px flex-1 bg-slate-200" />
					OR
					<span className="h-px flex-1 bg-slate-200" />
				</div>

				<section className="">
					<div className="flex items-center gap-3">
						<Star className="h-5 w-5 text-amber-500" />
						<h2 className="text-2xl font-semibold text-slate-900">Choose the credential that fits your goals</h2>
					</div>
					<p className="mt-3 max-w-2xl text-sm text-slate-500">
						Every certificate pathway includes guided checkpoints, mentor feedback, and verified digital badges to celebrate each milestone.
					</p>

					<div className="mt-8 grid gap-6 md:grid-cols-3">
						{certificateTiers.map(({ name, summary, details }) => (
							<div key={name} className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/40">
								<h3 className="text-xl font-semibold text-slate-900">{name}</h3>
								<p className="mt-3 text-sm text-slate-600">{summary}</p>
								<ul className="mt-6 space-y-2 text-sm text-slate-600">
									{details.map((item) => (
										<li key={item} className="flex items-center gap-2">
											<span className="h-2 w-2 rounded-full bg-blue-500"></span>
											{item}
										</li>
									))}
								</ul>
								<button
									onClick={() => navigate('/signup')}
									className="mt-8 inline-flex items-center justify-center rounded-full bg-blue-50 px-6 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
								>
									View syllabus
								</button>
							</div>
						))}
					</div>
				</section>
			</main>

			<HomeFooter />
		</div>
	);
}
