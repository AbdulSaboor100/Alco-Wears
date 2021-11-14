export let data = {
    martialArts : [
        'Karate Uniforms',
        'Jiu Jitsu Uniforms',
        'Taekwondo Uniforms',
        'Kung Fu Uniforms',
        'Hakama Uniforms',
        'Belts',
    ],
    martialArtsKarate : [],
    martialArtsJiuJitsu : [],
}

export function reducer(state, action) {
    switch (action.type) {
        case "KARATE_UNIFORMS": {
            let userClone = state.martialArtsKarate.slice(0)
            userClone.push(action.payload)
            return {
                ...state,
                martialArtsKarate: userClone
            }
        }
        case "JIU_JITSU_UNIFORMS": {
            let userClone = state.martialArtsJiuJitsu.slice(0)
            userClone.push(action.payload)
            return {
                ...state,
                martialArtsJiuJitsu: userClone
            }
        }
        

     
     
        
        default:
            return state;

    }
}