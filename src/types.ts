
/* Characteristic 
The element that refers to the CSS atribute, such as:
  padding 'p'
  margin 'm'
*/
interface Characteristic {
    name: string // padding
    character: string // p
    // css: string // padding :  { omitting at this time, a possible assistance in future? }
}

/* Direction
The instructions may have a direction associated with them.
These directions are a 'specific set', which can be combined with the Characteristic.
Negative included for inversing direction.
*/
type Direction = ''| '-' | 'x' | 'y' | 't' | 'b' | 'r' | 'l'

type StandardSpacing = [ // with an abreviated choice set to begin with
    ['0', '0px'],
    ['px', '1px'],
    // ['0.5', '0.125rem'],
    ['1', '0.25rem'],
    // ['1.5', '0.375rem'],
    ['2', '2.0rem'],
    ['4', '1rem'],
    ['8', '2rem']
]

interface TailwindAction {
    char: Characteristic
    dir: Direction
    dist: StandardSpacing
}

type Parent = 'Document' | 'Layout' | 'Element'
type Children = 'Spacing' | 'Sizing' | 'Topography' | 'Boarders' | 'Effects'

interface TailwindActionGroup {
    parentHeader: Parent
    childHeader: Children
}
