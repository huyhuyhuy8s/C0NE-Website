import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector(".scroll-tracker");

const animatedImage = document.querySelector(".image-rotate-in");

const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffset: [CSS.percent(0), CSS.percent(100)],
});

const animatedImageTimeline = new ScrollTimeline({
    scrollOffsets: [
        { target: animatedImage, edge: "end", threshold: "0"},
        { target: animatedImage, edge: "start", threshold: "1"},
    ],
});

scrollTracker.animate(
    {
        transform: ['scaleX(0)', 'scaleX(1)'],
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline,
    }
);

animatedImage.animate(
    {
        transform: [
            "perspective(1000px) rotateX(45deg)",
            "perspective(1000px) rotateX(0)",
        ],
        opacity: ["0", "1"],
    },
    {
        duration: 1,
        timeline: animatedImageTimeline,
    }
);