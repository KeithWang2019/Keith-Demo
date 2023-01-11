import { View } from "@keithwang/keith-core";

import "./assets/index.scss";

class QuickLaunchBar extends View {
  items = [
    {
      title: "测试内容",
      icon: "icon-unknow",
      url: "/",
      selected: false,
      subItems: [
        {
          title: "多节增删改查上下移动",
          icon: "icon-file",
          url: "/Index2",
          selected: false,
        },
        {
          title: "标记",
          icon: "icon-file",
          url: "/Index3",
          selected: false,
        },
        {
          title: "成员",
          icon: "icon-file",
          url: "/",
          selected: false,
        },
      ],
    },
    {
      title: "文档内容",
      icon: "icon-folder",
      url: "#",
      selected: false,
      subItems: [
        {
          title: "对象数量",
          icon: "icon-file",
          url: "#/Index3",
          selected: false,
        },
      ],
    },
  ];

  constructor(option) {
    super(option);
  }

  handleGoRoute(itemI, itemII) {
    let selectedItem = null;
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      if (item.title == itemI.title) {
        item.selected = true;
        selectedItem = item;
      } else {
        item.selected = false;
      }
      for (let j = 0; j < item.subItems.length; j++) {
        let subItem = item.subItems[j];
        if (itemII && subItem.title == itemII.title) {
          subItem.selected = true;
          selectedItem = subItem;
        } else {
          subItem.selected = false;
        }
      }
    }

    this.update();

    this.$emit("onGoRoute", selectedItem);
  }

  render() {
    return (
      <div className="quick-launch-bar">
        <ul className="deb">
          {this.items.map((item) => {
            if (item.subItems) {
              return (
                <li
                  className={{
                    "launch-item launch-item-i": true,
                    "launch-item-selected": item.selected,
                  }}
                  key={item.title}
                >
                  <a
                    href="javascript:void(0)"
                    onClick={() => this.handleGoRoute(item, null)}
                  >
                    <i className={"launch-item-icon iconfont " + item.icon}></i>
                    <span className="launch-item-name">{item.title}</span>
                  </a>
                  <ul>
                    {item.subItems.map((subItem) => {
                      return (
                        <li
                          className={{
                            "launch-item launch-item-ii": true,
                            "launch-item-selected": subItem.selected,
                          }}
                          key={subItem.title}
                        >
                          <a
                            href="javascript:void(0)"
                            onClick={() => this.handleGoRoute(item, subItem)}
                          >
                            <i
                              className={
                                "launch-item-icon iconfont " + subItem.icon
                              }
                            ></i>
                            <span className="launch-item-name">
                              {subItem.title}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            } else {
              return (
                <li
                  className={{
                    "launch-item launch-item-i": true,
                    "launch-item-selected": item.selected,
                  }}
                  key={item.title}
                >
                  <a
                    href="javascript:void(0)"
                    onClick={() => this.handleGoRoute(item, null)}
                  >
                    <i className={"launch-item-icon iconfont " + item.icon}></i>
                    <span className="launch-item-name">{item.title}</span>
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default QuickLaunchBar;
