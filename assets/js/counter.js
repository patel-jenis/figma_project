// counter increament once when visible
const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.done) {
          const counter = entry.target;
          let endValue = parseFloat(counter.textContent);
          let startValue = 0;
          counter.dataset.done = "true";
          let updating = setInterval(() => {
            startValue += endValue / 200;
            counter.textContent = startValue.toFixed(0);
            if (startValue >= endValue) {
              counter.textContent = endValue;
              clearInterval(updating);
              observer.unobserve(counter);
              console.log("end");
            }
          }, 10);
        }
      });
    },
    { threshold: 1 }
  );
  document
    .querySelectorAll(".counter")
    .forEach((counter) => observer.observe(counter));
  