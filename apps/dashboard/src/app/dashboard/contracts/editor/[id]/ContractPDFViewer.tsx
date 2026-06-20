import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 50,
        fontFamily: 'Helvetica',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderBottomWidth: 2,
        borderBottomColor: '#DDF247', // Subtle Aztecaz identity
        paddingBottom: 20,
        marginBottom: 30,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#14141F',
    },
    logoAccent: {
        color: '#A8B92D', // A slightly darker version of DDF247 for white background
    },
    headerInfo: {
        fontSize: 10,
        color: '#666666',
        textAlign: 'right',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        textDecoration: 'underline',
        color: '#14141F',
    },
    clause: {
        marginBottom: 15,
    },
    clauseTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#14141F',
    },
    clauseContent: {
        fontSize: 11,
        lineHeight: 1.5,
        textAlign: 'justify',
        color: '#333333',
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 50,
        right: 50,
        textAlign: 'center',
        color: '#999999',
        fontSize: 8,
        borderTopWidth: 1,
        borderTopColor: '#EEEEEE',
        paddingTop: 10,
    },
    signatures: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 60,
    },
    signatureBlock: {
        width: '40%',
        alignItems: 'center',
    },
    signatureLine: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#333333',
        marginBottom: 5,
    },
    signatureText: {
        fontSize: 10,
        fontWeight: 'bold',
    },
});

export type Block = {
    id: string;
    type: "title" | "clause" | "signatures";
    content: string;
    editable: boolean;
    title?: string;
};

export interface ContractPDFViewerProps {
    blocks: Block[];
    client: string;
}

export default function ContractPDFViewer({ blocks, client }: ContractPDFViewerProps) {
    const today = new Date().toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <PDFViewer style={{ width: '100%', height: '100%', border: 'none' }}>
            <Document title={`Contrato - ${client || 'Borrador'}`}>
                <Page size="A4" style={styles.page}>
                    
                    {/* Header with Aztecaz Identity */}
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.logoText}>AZTECAZ<Text style={styles.logoAccent}>.</Text></Text>
                            <Text style={{ fontSize: 9, color: '#666', marginTop: 4 }}>Inteligencia Inmobiliaria</Text>
                        </View>
                        <View>
                            <Text style={styles.headerInfo}>Fecha: {today}</Text>
                            <Text style={styles.headerInfo}>Folio: AZT-{Math.floor(Math.random() * 10000)}</Text>
                        </View>
                    </View>

                    {/* Content Blocks */}
                    {blocks.map((block) => {
                        if (block.type === 'title') {
                            return (
                                <Text key={block.id} style={styles.title}>
                                    {block.content}
                                </Text>
                            );
                        }

                        if (block.type === 'clause') {
                            return (
                                <View key={block.id} style={styles.clause}>
                                    {block.title && (
                                        <Text style={styles.clauseTitle}>{block.title}</Text>
                                    )}
                                    <Text style={styles.clauseContent}>{block.content}</Text>
                                </View>
                            );
                        }

                        if (block.type === 'signatures') {
                            return (
                                <View key={block.id} style={styles.signatures}>
                                    <View style={styles.signatureBlock}>
                                        <View style={styles.signatureLine} />
                                        <Text style={styles.signatureText}>EL PROFESIONAL</Text>
                                        <Text style={{ fontSize: 9, color: '#666', marginTop: 3 }}>Representante Legal</Text>
                                    </View>
                                    <View style={styles.signatureBlock}>
                                        <View style={styles.signatureLine} />
                                        <Text style={styles.signatureText}>EL PROPIETARIO</Text>
                                        <Text style={{ fontSize: 9, color: '#666', marginTop: 3 }}>{client ? client.toUpperCase() : "FIRMA"}</Text>
                                    </View>
                                </View>
                            );
                        }

                        return null;
                    })}

                    {/* Footer */}
                    <Text style={styles.footer} fixed>
                        Documento generado a través de Aztecaz Platform - www.aztecaz.com
                    </Text>
                </Page>
            </Document>
        </PDFViewer>
    );
}
