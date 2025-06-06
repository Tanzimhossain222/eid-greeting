import html2canvas from "html2canvas"

export async function exportAsImage(
  element: HTMLElement,
  filename: string,
  format: "png" | "jpeg" = "png",
): Promise<void> {
  try {
    // Temporarily force light background for export
    const originalStyle = element.style.cssText
    const wrapper = element.closest(".dark") || document.documentElement
    const wasDark = wrapper?.classList.contains("dark")

    // Temporarily remove dark mode for export
    if (wasDark) {
      wrapper?.classList.remove("dark")
    }

    // Wait a bit for styles to apply
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Configure html2canvas options for high quality
    const canvas = await html2canvas(element, {
      scale: 2, // Higher resolution
      useCORS: true,
      allowTaint: false,
      backgroundColor: "#ffffff", // Force white background
      width: element.offsetWidth,
      height: element.offsetHeight,
      scrollX: 0,
      scrollY: 0,
      logging: false,
    })

    // Restore dark mode if it was enabled
    if (wasDark) {
      wrapper?.classList.add("dark")
    }

    // Convert canvas to blob
    const blob = await new Promise<Blob>((resolve) => {
      canvas.toBlob(
        (blob) => resolve(blob!),
        format === "jpeg" ? "image/jpeg" : "image/png",
        0.95, // High quality for JPEG
      )
    })

    // Create download link
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `${filename}.${format}`

    // Trigger download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Clean up
    URL.revokeObjectURL(url)
  } catch (error) {
    console.error("Error exporting image:", error)
    throw new Error("Failed to export image")
  }
}
