import product1 from '../static/json/blueprint/product1.json'
export const useBlueprintLinks = (product: string) => {
    if (product === 'product1')
        return product1
}
