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
     static S0000: ExecutionCode = {
        code: 'S0000',
        title: "Ready to start the simulation",
        description: "Waiting for script execution.",
        success: true
    }
    /**
     * Success
     * All Checked
     */
    static S0001: ExecutionCode = {
        code: 'S0001',
        title: "All Checked",
        description: "All systems are operational.",
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

    static S0003: ExecutionCode = {
        code: 'S0003',
        title: "Simulation failure",
        description: "At least one of the simulations failed..",
        success: false
    }

    static S0004: ExecutionCode = {
        code: 'S0004',
        title: "Simulation Complete",
        description: "The aircraft is ready to take off",
        success: true
    }

    static S0005: ExecutionCode = {
        code: 'S0005',
        title: "End of simulation",
        description: "The script executed until the end.",
        success: true
    }

    /***
     * Success
     * Engine Check: Success
     */
    static E0001: ExecutionCode = {
        code: 'E0001',
        title: "Engine Check: Success",
        description: "Egine operational.",
        success: true
    }
    /***
     * Failure
     * Engine Check: Fail
     */
    static E0002: ExecutionCode = {
        code: 'E0002',
        title: "Engine Check: Fail",
        description: "Please verify engine components.",
        success: false
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
        success: false
    }


}