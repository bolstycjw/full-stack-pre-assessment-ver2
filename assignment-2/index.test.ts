import {expect, test} from 'bun:test'
import { failedLaunchesAtLaunchpad, starlinkSatellitesByLaunchDate} from './index'

// test failedLaunches
test("failedLaunches", async () => {
    const failedLaunches = await failedLaunchesAtLaunchpad("5e9e4502f5090995de566f86");
    expect(failedLaunches.launchpad).toBe("Kwajalein Atoll");
    expect(failedLaunches.all_failures.length).toBe(3);
    expect(failedLaunches.all_failures[0].name).toBe("FalconSat");
    expect(failedLaunches.all_failures[0].failures.length).toBe(1);
    expect(failedLaunches.all_failures[0].failures[0]).toBe("merlin engine failure");
});

// test starlinkSatellitesByLaunchDate
test("starlinkSatellitesByLaunchDate", async () => {
    const starlinkSatellites = await starlinkSatellitesByLaunchDate();

    // check that there are 120 satellites launched in 2019
    const satellites2019 = []
    for (const month in starlinkSatellites[2019]) {
        for (const day in starlinkSatellites[2019][month]) {
            satellites2019.push(...starlinkSatellites[2019][month][day]);
        }
    }
    expect(satellites2019.length).toBe(120);

    // check that there are 118 satellites launched in June 2020
    const satellites2020June = []
    for (const day in starlinkSatellites[2020][6]) {
        satellites2020June.push(...starlinkSatellites[2020][6][day]);
    }
    expect(satellites2020June.length).toBe(118);

    // check that there are 58 satellites launched on June 13th 2020
    const satellites2020June13 = starlinkSatellites[2020][6][13];
    expect(satellites2020June13.length).toBe(58);
});


