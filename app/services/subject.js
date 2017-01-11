/*
 * @Author: enzo
 * @Date:   2016-12-28 16:38:35
 * @Last Modified by:   enzo
 * @Last Modified time: 2016-12-28 18:01:59
 */

import request from "../request";
import copy from "copy-to";

class Subject extends request {
    constructor() {
        super();

        this.host = global._appConfig.subjectSoa;

        this.actions = {
            'list': 'subject.json'
        }
    }
}

const subject = new Subject();

export async function getSubject(id) {
    let data = await subject.fetch({
        url: "list"
    }).then(function(data) {
        return data;
    }, function(error) {
        console.log('出错了', error);
    })

    return data;
}