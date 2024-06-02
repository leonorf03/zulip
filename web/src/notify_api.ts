import * as channel from "./channel";
import type {StreamSubscription} from "./sub_store";

export function notify_user_about_mention(
    user_id: number,
    sub: StreamSubscription,
    success: () => void,
    failure: (xhr: JQuery.jqXHR<unknown>) => void,
): JQuery.jqXHR<unknown> | undefined {
    const stream_name = sub.name;
    return channel.post({
        url: "/json/users/me/notify_user",
        data: {
            principal: JSON.stringify(user_id),
            stream_name: JSON.stringify(stream_name),
        },
        success,
        error: failure,
    });
}
