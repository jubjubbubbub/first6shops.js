/** @param {NS} ns **/
// Function for attacking a target
async function attackTarget(ns, target) {
    ns.brutessh(target);
    ns.nuke(target);
    await ns.weaken(target);
    ns.tprint(`Weaken attempt on ${target} complete`);
    await ns.grow(target);
    ns.tprint(`Grow attempt on ${target} complete`);
    await ns.hack(target);
    ns.tprint(`Hack attempt on ${target} complete`);
// Main execution function
  const targets = ["n00dles", "foodnstuff", "sigma-cosmetics", "joesguns", "hong-fang-tea", "harakiri-sushi"];

  while (true) {
    for (let i = 0; i < 500; i++) {
      for (const target of targets) {
        await attackTarget(ns, target);
      }
      ns.tprint(`Iteration ${i + 1}/500 complete`);
    }
    ns.tprint(`Completed a set of 500 iterations. Starting again...`);
  }
}
