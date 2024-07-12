// src/simulation.ts
export function simulateSport(sportData: string[], goldTeams: string[], silverTeams: string[], bronzeTeams: string[], numSimulations: number = 10): [string, number][] {
    let countryPerformance: { [key: string]: number } = {};
    sportData.forEach(country => countryPerformance[country] = 0);

    for (let sim = 0; sim < numSimulations; sim++) {
        let performance = sportData.map(() => Math.random());

        sportData.forEach((country, i) => {
            if (goldTeams.includes(country)) {
                performance[i] *= 2.0;
            } else if (silverTeams.includes(country)) {
                performance[i] *= 1.8;
            } else if (bronzeTeams.includes(country)) {
                performance[i] *= 1.5;
            } else if (i === sportData.length - 1 && Math.random() < 0.05) {
                performance[i] *= 1.5;
            }
        });

        for (let i = 3; i < sportData.length - 3; i++) {
            const change = Math.random() < 0.5 ? -1 : Math.random() > 0.5 ? 1 : 0;
            performance[i] *= (1 + 0.1 * change);
        }

        let performanceMap = sportData.map((country, i) => ({ country, performance: performance[i] }));
        performanceMap.sort((a, b) => b.performance - a.performance);

        performanceMap.forEach((entry, i) => {
            countryPerformance[entry.country] += (sportData.length - i);
        });
    }

    return Object.entries(countryPerformance).sort((a, b) => b[1] - a[1]);
}
