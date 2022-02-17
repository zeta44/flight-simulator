export interface ExecutionCode {
    code: string;
    title: string;
    description: string;
    success: boolean;
}

export class ExecutionCodes {
    /**
     * Success
     * All Checked
     */
    static S0001: ExecutionCode = {
        code: 'S0001',
        title: "All Checked",
        description: "All systems are operational. No faults found. Aircraft is ready to take off.",
        success: true
    }

    /**
     * Failure
     * Simulation Interrupted
     */
    static S0002: ExecutionCode = {
        code: 'S0002',
        title: "Simulation interrupted",
        description: "The user requested to stop the simulation.",
        success: false
    }

    /***
     * Success
     * Engine Check: Success
     */
    static E0001: ExecutionCode = {
        code: 'E0001',
        title: "Engine Check: Success",
        description: "Egine operational, fuel check will not proceed.",
        success: true
    }
    /***
     * Failure
     * Engine Check: Fail
     */
    static E0002: ExecutionCode = {
        code: 'E0002',
        title: "Engine Check: Fail",
        description: "Engine failure is a scary thing. You might be going someplace important and failure of the engine can ruin everything. The good thing is almost every time the engine is about to fail it will have some minor and major warning signs that it is not working correctly.",
        success: true
    }

    /***
     * Success
     * Fuel Check: Success
     */
    static F0001: ExecutionCode = {
        code: 'F0001',
        title: "Fuel Check: Success",
        description: "The fuel levels are checked",
        success: true
    }
    /***
     * Failure
     * Fuel Check: Fail
     */
    static F0002: ExecutionCode = {
        code: 'F0001',
        title: "Fuel Check: Fail",
        description: "The fuel level is below the minimum required.",
        success: true
    }


}