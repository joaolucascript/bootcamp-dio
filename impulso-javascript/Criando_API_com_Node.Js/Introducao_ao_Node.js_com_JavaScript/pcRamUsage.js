const os = require("node:os");

setInterval(() => {
  const { arch, platform, totalmem, freemem } = os;

  const tRam = totalmem() / 1024 / 1024;
  const fRam = freemem() / 1024 / 1024;
  const usage = (fRam / tRam) * 100;

  const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRAM: `${parseInt(tRam)} MB`,
    FreeRAM: `${parseInt(fRam)} MB`,
    Status: `${usage.toFixed(2)}%`,
  };

  console.clear();
  console.table(stats);
  exports.stats = stats;
}, 1000);