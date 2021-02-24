
/* Existing element or elements
Consider in the simplest case, HTML consist of a single element, an empty div.
As complexity grows, add (concat?) more classes to the element.
*/
export type Html = string

/* Characteristic 
The element that refers to the CSS atribute, such as:
  padding 'p'
  margin 'm'
*/
interface Characteristic {
    name: string // padding
    character: string // p
    css?: string // padding 
}

/* Direction
The instructions may have a direction associated with them.
These directions are a 'specific set', which can be combined with the Characteristic.
Negative included for inversing direction.
*/
type Pointers = ''| '-' | 'x' | 'y' | 't' | 'b' | 'r' | 'l' // Also considering name of direction.

type Spacing = [StepName: string, StepValue: string]
export type SteppedSpacing = Spacing[]


export interface TailwindAction {
    char: Characteristic
    dir: Pointers[]
    dist: SteppedSpacing
}

type Parent = 'Document' | 'Layout' | 'Element'
type Children = 'Spacing' | 'Sizing' | 'Topography' | 'Boarders' | 'Effects'

export interface TailwindActionGroup {
    parentHeader: Parent
    childHeader: Children
    actions: TailwindAction[]
}
