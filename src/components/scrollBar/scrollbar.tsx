import React, { useEffect } from "react";

export default function ScrollBar() {
  useEffect(() => {
    const customScrollbar = document.querySelector('.custom-scrollbar') as HTMLElement | null;
    const scrollbarThumb = document.querySelector('.custom-scrollbar-thumb') as HTMLElement | null;
    const scrollContent = document.documentElement;

    if (!customScrollbar || !scrollbarThumb) return;

    let isDragging = false;
    let startY = 0;
    let startScroll = 0;
    let animationFrameId: number;

    const updateScrollbar = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const scrollHeight = scrollContent.scrollHeight;
        const clientHeight = scrollContent.clientHeight;
        const scrollTop = window.scrollY;

        const thumbHeight = Math.max(
          (clientHeight / scrollHeight) * customScrollbar.clientHeight,
          40
        );
        const maxThumbTop = customScrollbar.clientHeight - thumbHeight;
        const thumbTop = Math.min((scrollTop / (scrollHeight - clientHeight)) * maxThumbTop, maxThumbTop);

        scrollbarThumb.style.height = `${thumbHeight}px`;
        scrollbarThumb.style.transform = `translateY(${thumbTop}px)`;
      });
    };

    const startDrag = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      startY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      startScroll = window.scrollY;
      e.preventDefault();
    };

    const endDrag = () => {
      isDragging = false;
    };

    const drag = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const currentY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const deltaY = currentY - startY;
      const scrollHeight = scrollContent.scrollHeight - scrollContent.clientHeight;
      const trackHeight = customScrollbar.clientHeight;
      const scrollMove = startScroll + (deltaY / trackHeight) * scrollHeight;

      window.scrollTo(0, scrollMove);
    };

    updateScrollbar();
    window.addEventListener("scroll", updateScrollbar);
    window.addEventListener("resize", updateScrollbar);
    scrollbarThumb.addEventListener("mousedown", startDrag);
    scrollbarThumb.addEventListener("touchstart", startDrag);
    window.addEventListener("mouseup", endDrag);
    window.addEventListener("touchend", endDrag);
    window.addEventListener("mousemove", drag);
    window.addEventListener("touchmove", drag);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", updateScrollbar);
      window.removeEventListener("resize", updateScrollbar);
      scrollbarThumb.removeEventListener("mousedown", startDrag);
      scrollbarThumb.removeEventListener("touchstart", startDrag);
      window.removeEventListener("mouseup", endDrag);
      window.removeEventListener("touchend", endDrag);
      window.removeEventListener("mousemove", drag);
      window.removeEventListener("touchmove", drag);
    };
  }, []);

  return (
    <div className="custom-scrollbar">
      <div className="custom-scrollbar-thumb" />
    </div>
  );
}
