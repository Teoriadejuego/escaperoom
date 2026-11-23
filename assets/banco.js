'use strict';
  const pendingBanks = new Map();
  window.loadBank = function loadBank(course) {
    if (window[course.global]) return Promise.resolve(window[course.global]);
    if (!pendingBanks.has(course.global)) {
      const request = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'data/' + course.archivo;
        script.onload = () => window[course.global] ? resolve(window[course.global]) : reject();
        script.onerror = reject;
        document.head.append(script);
      }).finally(() => pendingBanks.delete(course.global));
      pendingBanks.set(course.global, request);
    }
    return pendingBanks.get(course.global);
  };
