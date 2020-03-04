export function addedFeature(newFeature) {
    return { type: 'ADDED_FEATURE', payload: newFeature };
}

export const additionalFeature = (newFeature) => {
    return { type: 'ADDITIONAL_FEATURE', payload: newFeature }
}