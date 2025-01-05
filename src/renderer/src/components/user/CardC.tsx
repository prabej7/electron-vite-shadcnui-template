import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@renderer/components/ui/card"

interface Props {
    title?: string;
    description?: string;
    content: React.ReactNode;
    footer?: string
}

const Cardc: React.FC<Props> = ({ content, title, description, footer }) => {
    return <Card>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
            {content}
        </CardContent>
        <CardFooter>
            <p>{footer}</p>
        </CardFooter>
    </Card>

};

export default Cardc