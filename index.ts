import axios from "axios";
import { string } from "yup";

type Props = {
    error: any, method?: string, endPoint?: string, requestIp?: string, headers?: object, logType?: number,
    vp?: string, vd?: string
};

const Log = (props: Props) => {
    const { error, method, endPoint, requestIp, headers, logType, vp, vd } = props;

    return new Promise((resolve, reject) => {
        if ((!process.env.PROJECT_KEY && !vp) || (!process.env.DELIVERABLE_KEY && !vd))
            reject("PROJECT_KEY or DELIVERABLE_KEY is missing");
        let fName, clmn;
        try {
            const [filename, line, column] = error.stack.match(/\/([\/\w-_\.]+\.js):(\d*):(\d*)/);
            fName = filename;
            clmn = column;
        } catch (error) {
        }

        const body = {
            vp: process.env.PROJECT_KEY ? process.env.PROJECT_KEY : vp,
            vd: process.env.DELIVERABLE_KEY ? process.env.DELIVERABLE_KEY : vd,
            o: logType ? logType : 5,
            a: JSON.stringify({
                b: {
                    c: error?.message,
                    d: fName,
                    f: clmn,
                    g: 0,
                    h: "Error",
                },
                i: error.stack,
                k: headers,
                m: endPoint,
                n: method,
                j: process.versions
            }),
            r: requestIp
        }

        console.log(body)

        axios.post("http://192.168.1.152/lighthouseLumen/public/add-log", body, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            resolve(response)
        })
            .catch(error => {
                reject(error)
            });
    });
}

export default Log