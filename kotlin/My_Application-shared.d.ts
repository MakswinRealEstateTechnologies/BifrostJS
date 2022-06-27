type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt
export namespace com.makswin.myapplication {
    class Student {
        constructor(name: string);
        get name(): string;
        component1(): string;
        copy(name?: string): com.makswin.myapplication.Student;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export as namespace My_Application_shared;