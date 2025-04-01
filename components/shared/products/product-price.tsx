import { cn } from "@/lib/utils";

/**
 * A component that renders a product price with a dollar sign and two decimal places.
 * The rendered price is wrapped in a `p` element with a class of `text-2xl`.
 * The dollar sign is rendered with a class of `text-xs align-super`.
 * The integer part of the price is rendered as a string.
 * The decimal part of the price is rendered as a string with a period as the separator.
 * The decimal part is rendered with a class of `text-xs align-super`.
 * The component accepts an optional `className` property which is applied to the rendered `p` element.
 * @param {{value: number, className?: string}} props a props object with a required `value` property and an optional `className` property
 * @returns {JSX.Element} a JSX element
 */
const ProductPrice = ({value, className} : {value: number, className?: string}) => {
    const stringValue = value.toFixed(2);
    const [intValue, floatValue] = stringValue.split(".");
    return ( 
        <p className={cn('text-2xl', className)}>
            <span className="text-xs align-super">$</span>
            {intValue}
            <span className="text-xs align-super">.{floatValue}</span>
        </p>
     );
}
 
export default ProductPrice;