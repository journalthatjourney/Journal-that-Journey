import React, { useState } from "react";

interface CertificateProps {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  challengeTitle?: string;
}

const Certificate: React.FC<CertificateProps> = ({
  firstName = "",
  lastName = "",
  fullName = "",
  challengeTitle = "30 Days Closer to God",
}) => {
  const [name, setName] = useState(
    fullName || `${firstName} ${lastName}`.trim()
  );

  const [showCertificate, setShowCertificate] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [certificateFile, setCertificateFile] = useState<File | null>(null);

  const date = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  /*
   * --------------------------------
   * GENERATE CERTIFICATE PREVIEW
   * --------------------------------
   */
  const generateCertificate = () => {
    if (!name.trim()) {
      alert("Please enter your full name.");
      return;
    }

    setShowCertificate(true);
    setCertificateFile(null);
  };

  /*
   * --------------------------------
   * CREATE CERTIFICATE IMAGE
   * --------------------------------
   */
  const buildCertificate = (): Promise<File | null> => {
    return new Promise((resolve) => {
      const template = new Image();

      template.onload = () => {
        const canvas = document.createElement("canvas");

        canvas.width = template.naturalWidth;
        canvas.height = template.naturalHeight;

        const ctx = canvas.getContext("2d");

        if (!ctx) {
          resolve(null);
          return;
        }

        /*
         * CERTIFICATE BACKGROUND
         */
        ctx.drawImage(
          template,
          0,
          0,
          canvas.width,
          canvas.height
        );

        /*
         * PARTICIPANT NAME
         *
         * Positioned directly on the printed name line.
         */
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#315B49";

        let fontSize = Math.round(canvas.width * 0.038);

        if (name.trim().length > 25) {
          fontSize = Math.round(canvas.width * 0.032);
        }

        if (name.trim().length > 35) {
          fontSize = Math.round(canvas.width * 0.028);
        }

        ctx.font = `bold ${fontSize}px Georgia, serif`;

        ctx.fillText(
          name.trim(),
          canvas.width / 2,
          canvas.height * 0.375
        );

        /*
         * COMPLETION DATE
         */
        ctx.fillStyle = "#4D5A50";
        ctx.font = `${Math.round(
          canvas.width * 0.020
        )}px Georgia, serif`;

        ctx.fillText(
          date,
          canvas.width * 0.30,
          canvas.height * 0.80
        );

        /*
         * SIGNATURE
         *
         * Positioned directly over the printed
         * signature line.
         */
        const signature = new Image();

        signature.onload = () => {
          const signatureWidth = canvas.width * 0.13;

          const signatureHeight =
            (signature.naturalHeight /
              signature.naturalWidth) *
            signatureWidth;

          /*
           * Signature center:
           * slightly right of the certificate center,
           * directly over the printed signature line.
           */
          const signatureX =
            canvas.width * 0.67 -
            signatureWidth / 2;

          /*
           * Align the bottom of the signature
           * with the printed signature line.
           */
          const signatureY =
            canvas.height * 0.825 -
            signatureHeight;

          ctx.drawImage(
            signature,
            signatureX,
            signatureY,
            signatureWidth,
            signatureHeight
          );

          /*
           * CREATE PNG FILE
           */
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                resolve(null);
                return;
              }

              const safeName = name
                .trim()
                .replace(/[^a-z0-9]+/gi, "-")
                .replace(/^-|-$/g, "");

              const fileName =
                `${safeName}-30-Days-Closer-to-God-Certificate.png`;

              const file = new File(
                [blob],
                fileName,
                {
                  type: "image/png",
                }
              );

              resolve(file);
            },
            "image/png"
          );
        };

        signature.onerror = () => {
          /*
           * If the signature cannot load,
           * still create the certificate.
           */
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                resolve(null);
                return;
              }

              const safeName = name
                .trim()
                .replace(/[^a-z0-9]+/gi, "-")
                .replace(/^-|-$/g, "");

              const fileName =
                `${safeName}-30-Days-Closer-to-God-Certificate.png`;

              resolve(
                new File(
                  [blob],
                  fileName,
                  {
                    type: "image/png",
                  }
                )
              );
            },
            "image/png"
          );
        };

        signature.src =
          "/images/vanessa-copeland-richards-signature.png";
      };

      template.onerror = () => {
        resolve(null);
      };

      template.src =
        "/images/certificate-template.png";
    });
  };

  /*
   * --------------------------------
   * MOBILE SAVE / SHARE
   * --------------------------------
   *
   * iPhone browsers can block normal
   * blob downloads. Web Share lets the
   * user send the generated PNG to Photos
   * or another supported save location.
   */
  const saveCertificateToPhone = async (
    file: File
  ) => {
    try {
      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        await navigator.share({
          title:
            "My Journal That Journey Certificate",
          text:
            "My 30 Days Closer to God Certificate",
          files: [file],
        });

        return true;
      }

      /*
       * Fallback for browsers without
       * file sharing support.
       */
      const imageUrl =
        URL.createObjectURL(file);

      const link =
        document.createElement("a");

      link.href = imageUrl;
      link.download = file.name;
      link.target = "_blank";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        URL.revokeObjectURL(imageUrl);
      }, 10000);

      return true;
    } catch (error) {
      console.error(
        "Certificate save error:",
        error
      );

      return false;
    }
  };

  /*
   * --------------------------------
   * DOWNLOAD CERTIFICATE
   * --------------------------------
   */
  const downloadCertificate = async () => {
    if (!name.trim()) {
      alert(
        "Please enter your full name first."
      );
      return;
    }

    setIsDownloading(true);

    try {
      const file =
        await buildCertificate();

      if (!file) {
        alert(
          "Unable to create the certificate. Please try again."
        );

        setIsDownloading(false);
        return;
      }

      setCertificateFile(file);

      /*
       * MOBILE
       *
       * Open the phone's share/save system.
       */
      if (
        /iPhone|iPad|iPod|Android/i.test(
          navigator.userAgent
        )
      ) {
        const saved =
          await saveCertificateToPhone(file);

        if (!saved) {
          alert(
            "Your phone could not save the certificate. Please try again."
          );
        }

        setIsDownloading(false);
        return;
      }

      /*
       * DESKTOP
       *
       * Normal PNG download.
       */
      const imageUrl =
        URL.createObjectURL(file);

      const link =
        document.createElement("a");

      link.href = imageUrl;
      link.download = file.name;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        URL.revokeObjectURL(imageUrl);
      }, 10000);

      setIsDownloading(false);
    } catch (error) {
      console.error(
        "Certificate download error:",
        error
      );

      alert(
        "Unable to download the certificate. Please try again."
      );

      setIsDownloading(false);
    }
  };

  /*
   * --------------------------------
   * PAGE
   * --------------------------------
   */
  return (
    <section className="min-h-screen w-full bg-[#F8F5EC] pt-24 pb-16">

      {/* INTRODUCTION */}
      <div className="relative overflow-hidden border-b border-[#DCCFA5] bg-[#F3EFE3]">

        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#DCE5D8]/50 blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#DCCFA5]/30 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 py-14 text-center md:px-10 md:py-20">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#8B6A28]">
            Journal That Journey
          </p>

          <h1 className="font-serif text-4xl font-semibold text-[#315B49] md:text-5xl">
            {challengeTitle}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#5F665F] md:text-lg">
            Congratulations on completing the 30 Days Closer to God
            Challenge. You showed up, made space for God, and took
            intentional steps toward a deeper relationship with Him.
          </p>

          <p className="mt-4 font-serif text-lg italic text-[#6B756C]">
            Your journey is worth celebrating.
          </p>

        </div>
      </div>

      {/* NAME FORM */}
      <div className="mx-auto mt-10 w-full max-w-2xl px-6">

        <div className="rounded-2xl border border-[#DCCFA5] bg-white p-6 shadow-sm md:p-8">

          <label
            htmlFor="certificate-name"
            className="mb-3 block text-lg font-semibold text-[#214A3A]"
          >
            Enter Your Full Name
          </label>

          <input
            id="certificate-name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setShowCertificate(false);
              setCertificateFile(null);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                generateCertificate();
              }
            }}
            placeholder="Enter your full name"
            className="w-full rounded-lg border border-[#D8C99D] px-4 py-3 text-[#214A3A] outline-none transition focus:border-[#B88A28] focus:ring-2 focus:ring-[#B88A28]/30"
          />

          <button
            type="button"
            onClick={generateCertificate}
            className="mt-5 w-full rounded-lg bg-[#315B49] px-6 py-4 font-semibold text-white transition hover:bg-[#214A3A]"
          >
            Generate My Certificate
          </button>

        </div>
      </div>

      {/* CERTIFICATE PREVIEW */}
      {showCertificate && (
        <div className="mx-auto mt-12 w-full max-w-[1000px] px-4">

          <div className="overflow-hidden rounded-xl border border-[#DCCFA5] bg-[#FBF8F0] shadow-lg">

            <div className="relative w-full">

              <img
                src="/images/certificate-template.png"
                alt="Journal That Journey Certificate of Completion"
                className="block h-auto w-full"
              />

              {/* PARTICIPANT NAME */}
              <div
                className="
                  absolute
                  left-1/2
                  w-[80%]
                  -translate-x-1/2
                  text-center
                  top-[36.8%]
                  md:top-[36.5%]
                "
              >
                <div
                  className="font-serif font-semibold text-[#315B49]"
                  style={{
                    fontSize:
                      "clamp(15px, 3.4vw, 36px)",
                    lineHeight: 1,
                  }}
                >
                  {name}
                </div>
              </div>

              {/* SIGNATURE */}
              <div
                className="
  absolute
  right-[19%]
  bottom-[13%]
  w-[17%]
  sm:right-[19%]
  sm:bottom-[12.8%]
  sm:w-[18%]
  md:right-[18.5%]
  md:bottom-[12.5%]
  md:w-[18%]
"
                
              >
                <img
                  src="/images/vanessa-copeland-richards-signature.png"
                  alt="Vanessa Copeland-Richards signature"
                  className="h-auto w-full"
                />
              </div>

              {/* DATE */}
              <div
                className="absolute text-center font-serif text-[#4D5A50]"
                style={{
                  left: "15%",
                  top: "76%",
                  width: "30%",
                  fontSize:
                    "clamp(11px, 1.5vw, 20px)",
                }}
              >
                {date}
              </div>

            </div>
          </div>

          {/* DOWNLOAD / SAVE */}
          <div className="mt-8 text-center">

            <button
              type="button"
              onClick={downloadCertificate}
              disabled={isDownloading}
              className="inline-flex w-full max-w-md items-center justify-center rounded-lg bg-[#315B49] px-8 py-4 font-semibold text-white shadow-md transition hover:bg-[#214A3A] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isDownloading
                ? "Creating Certificate..."
                : "Download My Certificate"}
            </button>

            {/* MOBILE HELP TEXT */}
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#6B706B]">
              On mobile, tap "Download My Certificate"
              and use the Share menu to save your certificate
              to Photos or your phone.
            </p>

          </div>

        </div>
      )}

    </section>
  );
};

export default Certificate;