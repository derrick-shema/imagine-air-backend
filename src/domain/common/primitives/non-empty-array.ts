class NonEmptyArray<T> 
{
    public add(element: T) {
        this.elements.push(element);
    }

    get First() {
        return this.getSortedElements()[0] as Readonly<T>;
    }

    get Last() {
        let index = this.elements.length - 1;
        return this.getSortedElements()[index] as Readonly<T>;
    }

    get All() {
        return this.getSortedElements() as ReadonlyArray<T>;
    }

    static Create<T>(first: T) {
        return new NonEmptyArray(first);
    }

    constructor(first: T, sortFunc?: (a: T, b: T) => number) { 
        this.elements = [];
        this.elements.push(first);

        if(typeof sortFunc !== 'undefined') {
            this.sortFunc = sortFunc;
        }
    }

    private elements: Array<T>;
    
    private sortFunc: (a: T, b: T) => number;

    private isSortFunctionDefined() {
        return (typeof this.sortFunc !== 'undefined');
    }

    private getSortedElements() {
        if(this.isSortFunctionDefined()) {
            return this.elements.sort(this.sortFunc);
        }
        return this.elements;
    }
}

export default NonEmptyArray;