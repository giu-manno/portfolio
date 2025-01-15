import { EmojiProvider, Emoji } from "react-apple-emojis";
import emojiData from "react-apple-emojis/src/data.json"

export default function AppleEmoji({ name, className, width }) {
    return (
        <EmojiProvider data={emojiData}>
            <Emoji name={name} className={className} style={(!width && {height: "1em"}) || (width && {width: width})}/>
        </EmojiProvider>
    );
}