export interface ExecutionCode {
    code: string;
    title: string;
    description: string;
    success: boolean;
}

export class ExecutionCodes {
    
    /**
     * All Checked: Success
     */
    static S0001: ExecutionCode = {
        code: 'S0001',
        title: "All Checked",
        description: "All systems are operational.",
        success: true
    }

    /**
     * Simulation Interrupted: Failure
     */
    static S0002: ExecutionCode = {
        code: 'S0002',
        title: "Simulation Interrupted",
        description: "The user requested to stop the simulation.",
        success: false
    }
    /**
     * Simulation Failure: Failure
     */
    static S0003: ExecutionCode = {
        code: 'S0003',
        title: "Simulation Failure",
        description: "At least one of the simulations failed.",
        success: false
    }
    /**
     * Simulation Complete: Success
     */
    static S0004: ExecutionCode = {
        code: 'S0004',
        title: "Simulation Complete",
        description: "The aircraft is ready to take off.",
        success: true
    }
    /**
     * Engine Check: Success
     */
    static E0001: ExecutionCode = {
        code: 'E0001',
        title: "Engine Check: Success",
        description: "Egine operational.",
        success: true
    }
    /**
     * Failure
     * Engine Check: Fail
     */
    static E0002: ExecutionCode = {
        code: 'E0002',
        title: "Engine Check: Failure",
        description: "Please verify engine components.",
        success: false
    }

    /***
     * Fuel Check: Success
     */
    static F0001: ExecutionCode = {
        code: 'F0001',
        title: "Fuel Check: Success",
        description: "The fuel levels are checked",
        success: true
    }
    /***
     * Fuel Check: Failure
     */
    static F0002: ExecutionCode = {
        code: 'F0001',
        title: "Fuel Check: Failure",
        description: "The fuel level is below the minimum required.",
        success: false
    }
}