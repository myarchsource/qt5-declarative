import QtQml 2.0

QtObject {
    id: root
    property bool targetProperty: true

    property QtObject foo: QtObject {
        id: otherSubObject
        property alias theAlias: root.targetProperty
    }

    property QtObject referencingSubObject: QtObject {
        property alias success: otherSubObject.theAlias
    }

}
