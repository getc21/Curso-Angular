
const skills: string[] = ['Bash', 'Counter', 'Healing'];


interface Character {
    name: string;
    hp: number;
    skills: string[];
    attack: number;
    defense: number;
    speed: number;
    hometown?: string;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    attack: 10,
    defense: 10,
    speed: 10,
    skills: ['Bash', 'Counter', 'Healing'],
    
};

strider.hometown = 'Rivendell';

console.table(strider);



export {};