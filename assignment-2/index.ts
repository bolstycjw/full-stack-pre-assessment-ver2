interface FailedLaunches {
    launchpad: string;
    all_failures: {
        name: string;
        failures: string[];
    }[];
}

export async function failedLaunchesAtLaunchpad(launchpadId: string): Promise<FailedLaunches> {
    // get launchpad populated with launches
    const launchpadQuery = await fetch('https://api.spacexdata.com/v4/launchpads/query', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {
                _id: launchpadId
            },
            options: {
                populate: ["launches"]
                
            }
        })
    }) .then(res => res.json() as unknown as LaunchpadQuery);

    return {
        launchpad: launchpadQuery.docs[0].name,
        all_failures: launchpadQuery.docs[0].launches
            .filter(launch => !launch.success)
            .map(launch => ({
                name: launch.name,
                failures: launch.failures.map(failure => failure.reason)
            }))
    };


}

interface StarlinkSatellitesByLaunchDate {
    [year: number]: {
        [month: number]: {
            [day: number]: StarlinkSatellite[]
        }
    }
}

export async function starlinkSatellitesByLaunchDate(): Promise<StarlinkSatellitesByLaunchDate> {
    // get starlink satellites
    const starlinkSatellites = await fetch('https://api.spacexdata.com/v4/starlink', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }) .then(res => res.json() as unknown as StarlinkSatellite[]);

    // group by launch date
    const starlinkSatellitesByLaunchDate: StarlinkSatellitesByLaunchDate = {};
    starlinkSatellites.forEach(satellite => {
        const launchDate = new Date(satellite.spaceTrack.LAUNCH_DATE);
        
        const year = launchDate.getFullYear();
        const month = launchDate.getMonth() + 1;
        const day = launchDate.getDate();

        if (!starlinkSatellitesByLaunchDate[year]) {
            starlinkSatellitesByLaunchDate[year] = {};
        }
        if (!starlinkSatellitesByLaunchDate[year][month]) {
            starlinkSatellitesByLaunchDate[year][month] = {};
        }
        if (!starlinkSatellitesByLaunchDate[year][month][day]) {
            starlinkSatellitesByLaunchDate[year][month][day] = [];
        }

        starlinkSatellitesByLaunchDate[year][month][day].push(satellite);
    });

    return starlinkSatellitesByLaunchDate;
}
