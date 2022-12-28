import { red } from "@mui/material/colors";
import { fontSize, lineHeight } from "@mui/system";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#d11fb6",
        color: "white",
    },
    section: {
        margin: 10,
        padding: 10,
    },
    name: {
        margin: 10,
        padding: 10,
        color: 'rgb(59 130 246)',
        fontWeight: 800,
    },
    title: {
        margin: 10,
        padding: 10,
        color: 'rgb(59 130 246)',
        fontWeight: 700,
    },
    other: {
        color: 'rgb(156 163 175)',
        margin: 10,
        padding: 10,
    }

});

// Create Document Component
function CertificatePDF({ user, courseObj }) {
    return (
        <Document>
            <Page>
                <View style={styles.name}>
                    <Text>
                        {user.firstName} {user.lastName}
                    </Text>
                </View>
                <View style={styles.other}>
                    <Text>has successfully completed</Text>
                </View>
                <View style={styles.title}>
                    <Text>{courseObj.title}</Text>
                </View>
                <View style={styles.other}>
                    <Text>
                        an online non-credit course authorized by {courseObj.instructor.name} and
                        offered through ACL
                    </Text>
                </View>
            </Page>
            <div className="text-gray-400 font-bold text-4x"></div>
        </Document >
    );
}
export default CertificatePDF